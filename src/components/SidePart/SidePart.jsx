import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import Searchbar from '../Searchbar';
import { ConversationList } from '../ConversationList/ConversationList';
import { SidePartWrapper } from './SidePart.styled';
import { getStorageItem } from 'services/useLocalStorage';

import users from '../../jsonData/jsonData.json';
const usersExample = users;

export const SidePart = ({
  value,
  handleUserClick,
  lastUserMessage,
  activeUserId,
  message,
  userDate,
}) => {
  const [usersConversation, setUsersConversation] = useState(() => {
    return getStorageItem('users') ?? usersExample;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (activeUserId) {
      const getCurrentUser = [...usersConversation].find(
        user => user.id === activeUserId
      );
      const filtered = [...usersConversation].filter(
        user => user.id !== activeUserId
      );
      filtered.unshift(getCurrentUser);
      setUsersConversation(filtered);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUserId]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersConversation));
  }, [usersConversation]);

  const deleteContact = userId => {
    setUsersConversation(prevState =>
      prevState.filter(user => user.id !== userId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getFilteredConversation = () => {
    const normalizedFilter = filter.toLowerCase();
    return usersConversation.filter(user =>
      user.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <SidePartWrapper>
      <Searchbar
        value={value}
        // onSubmit={handleFormSubmit}
        onChange={changeFilter}
      />
      <ConversationList
        message={message}
        userDate={userDate}
        lastUserMessage={lastUserMessage}
        onUserClick={handleUserClick}
        users={getFilteredConversation()}
        onDeleteContact={deleteContact}
        value={filter}
      />
    </SidePartWrapper>
  );
};
