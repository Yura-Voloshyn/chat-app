import { SidePart } from '../SidePart/SidePart';
import { Conversation } from '../Conversation/Conversation';
import { useState } from 'react';
import { getUserHistory } from 'services/useLocalStorage';

export const ChatWrapper = () => {
  // const [userConversation, setUserConversation] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [messages, setMessages] = useState(() => {
    return getUserHistory(userId);
  });

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
          messages={messages}
        />
      )}
    </>
  );
};
