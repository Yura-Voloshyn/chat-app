import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import Searchbar from '../Searchbar';
import { ConversationList } from '../ConversationList/ConversationList';
import { SidePartWrapper } from './SidePart.styled';

import users from '../../jsonData/jsonData.json';
const usersExample = users;

export const SidePart = ({ value, handleUserClick }) => {
  const [usersConversation, setUsersConversation] = useState(() => {
    return JSON.parse(window.localStorage.getItem('users')) ?? usersExample;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersConversation));
  }, [usersConversation]);

  // юзефект прийме нову айді і мувнути на початок списку

  const deleteContact = userId => {
    setUsersConversation(prevState =>
      prevState.filter(user => user.id !== userId)
    );
  };

  // const handleFormSubmit = data => {
  //   const alreadyExist = usersConversation.find(el => el.name === data.name);
  //   const newUserConversation = { id: nanoid(), name: data.name };
  //   alreadyExist
  //     ? alert(`${data.name} is already in contacts`)
  //     : setUsersConversation(prevUserConv => [
  //         newUserConversation,
  //         ...prevUserConv,
  //       ]);
  // };

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
        onUserClick={handleUserClick}
        users={getFilteredConversation()}
        onDeleteContact={deleteContact}
        value={filter}
      />
    </SidePartWrapper>
  );
};
