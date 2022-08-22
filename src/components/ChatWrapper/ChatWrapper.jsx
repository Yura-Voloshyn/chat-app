import { SidePart } from '../SidePart/SidePart';
import { Conversation } from '../Conversation/Conversation';
// import { getUserHistory } from 'services/useLocalStorage';
import { useState } from 'react';

export const ChatWrapper = ({ messages, users }) => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [activeUserId, setActiveUserId] = useState(null);
  // const [userLastMessage, setUserLastMessage] = useState('');

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
  // const handleLastUserMessage = id => {
  //   getUserHistory(id);
  // };
  return (
    <>
      <SidePart
        users={users}
        activeUserId={activeUserId}
        // handleLastUserMessage={handleLastUserMessage}
        // lastUserMessage={userLastMessage}
        handleUserClick={handleUserClick}
      />
      {userId && (
        <Conversation
          // handleLastUserMessage={handleLastUserMessage}
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
