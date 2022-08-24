import { SidePart } from '../SidePart/SidePart';
import { Conversation } from '../Conversation/Conversation';

import { useState } from 'react';

export const ChatWrapper = ({ messages, users }) => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [activeUserId, setActiveUserId] = useState(null);

  const [message, setMessage] = useState('');
  const [userDate, setUserDate] = useState('');

  const handleUserClick = (id, name, avatar) => {
    setUserId(id);
    setUserName(name);
    setUserAvatar(avatar);
  };

  const handleActiveUserConversation = id => {
    if (id !== activeUserId) {
      setActiveUserId(id);
    }
  };
  const handleLastMessage = ({ message, userDate }) => {
    setMessage(message);
    setUserDate(userDate);
  };
  return (
    <>
      <SidePart
        users={users}
        activeUserId={activeUserId}
        message={message}
        userDate={userDate}
        handleUserClick={handleUserClick}
      />
      {userId && (
        <Conversation
          handleLastMessage={handleLastMessage}
          handleActiveUserConversation={handleActiveUserConversation}
          userAvatar={userAvatar}
          userName={userName}
          userId={userId}
          messages={messages}
        />
      )}
    </>
  );
};
