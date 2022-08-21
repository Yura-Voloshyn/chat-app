import { SidePart } from '../SidePart/SidePart';
import { Conversation } from '../Conversation/Conversation';
import { useState, useEffect } from 'react';

export const ChatWrapper = () => {
  const [userConversation, setUserConversation] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  console.log(userId);
  console.log(userName);
  const handleUserClick = (id, name, avatar) => {
    setUserId(id);
    setUserName(name);
    setUserAvatar(avatar);
  };

  return (
    <>
      <SidePart handleUserClick={handleUserClick} />
      {userId && (
        <Conversation
          userAvatar={userAvatar}
          userName={userName}
          userId={userId}
        />
      )}
    </>
  );
};
