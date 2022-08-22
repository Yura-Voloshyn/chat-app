import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import {
  ConversationWrapper,
  ConversationUserName,
  ConversationChatField,
  ConversationUserAvatar,
} from './Conversation.styled';
import Inputbar from '../Inputbar';
import ChatMessage from '../ChatMessage/ChatMessage';
import getApiResult from '../../services/apiRandomMessage';
import { getUserHistory, saveHistory } from '../../services/useLocalStorage';

let timeoutId = null;
export const Conversation = ({
  userId,
  userName,
  userAvatar,
  handleActiveUserConversation,
  // handleLastUserMessage,
}) => {
  const [messages, setMessages] = useState(() => {
    return getUserHistory(userId);
  });
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    if (lastMessage !== null) {
      saveHistory(userId, lastMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage]);

  useEffect(() => {
    setMessages(getUserHistory(userId));
  }, [userId]);

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const chackMessageRecive = userIdFrom => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      try {
        getApiResult().then(res => {
          if (userIdFrom === userId) {
            setMessages(prevMessage => [
              ...prevMessage,
              {
                message: res.value,
                date: new Date().toLocaleString(),
                isMine: false,
              },
            ]);
          }
          if (userIdFrom === userId) {
            setLastMessage({
              message: res.value,
              date: new Date().toLocaleString(),
              isMine: false,
            });
          }
        });
      } catch (error) {
        console.log('error');
      }
    }, 10000);
  };

  const handleSendMessage = message => {
    if (message.trim() === '') {
      return;
    }
    const myMessageToState = {
      message,
      date: new Date().toLocaleString(),
      isMine: true,
    };

    setMessages(prevMessage =>
      !prevMessage ? [myMessageToState] : [...prevMessage, myMessageToState]
    );
    setLastMessage(myMessageToState);
    // console.log(lastMessage);
    // handleLastUserMessage(userId);
    handleActiveUserConversation(userId);

    chackMessageRecive(userId);
  };

  return (
    <ConversationWrapper>
      <ConversationUserName>
        <ConversationUserAvatar src={userAvatar} alt={userName} width="48" />
        {userName}
      </ConversationUserName>
      <ConversationChatField>
        {!messages.length ? (
          <p>Start your conversation</p>
        ) : (
          messages.map(({ message, date, isMine }) => {
            return (
              <ChatMessage
                userId={userId}
                key={nanoid()}
                isMine={isMine}
                message={message}
                date={date}
              />
            );
          })
        )}
        <div ref={divRef} />
      </ConversationChatField>
      <Inputbar onChatSubmit={handleSendMessage} />
    </ConversationWrapper>
  );
};
