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
import getApiResult from 'services/apiRandomMessage';

// const chatField = window.document.querySelector('.forScroll');
// console.log(chatField);
let timeoutId = null;
export const Conversation = ({ userId, userName, userAvatar }) => {
  const [messages, setMessages] = useState(() => {
    return JSON.parse(window.localStorage.getItem(`${userId}`)) ?? [];
  });

  useEffect(() => {
    localStorage.setItem(`${userId}`, JSON.stringify(messages));
  }, [messages, userId]);

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const chackMessageRecive = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      try {
        const chackMessage = getApiResult().then(res =>
          setMessages(prevMessage => [...prevMessage, res.value])
        );
        console.log(chackMessage);
      } catch (error) {
        console.log('error');
      }
    }, 2000);
  };

  const date = new Date();

  const handleSendMessage = message => {
    if (message.trim() === '') {
      return;
    }

    setMessages(prevMessage => [...prevMessage, message]);
    date.toLocaleString();
    chackMessageRecive();
  };
  // align-self: ${message =>
  //     message.includes('Chuck Norris') ? 'flex-end' : 'flex-start'};
  /* align-self: flex-end; */

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
          messages.map(message => {
            const fromChack =
              message.toLowerCase().includes('Chuck Norris') ||
              message.includes('CHUCK NORRIS');

            //   console.log(date);
            //   date.toLocaleString();
            return (
              <ChatMessage
                userId={userId}
                key={nanoid()}
                fromChack={
                  message.includes('CHUCK NORRIS') ||
                  message.includes('Chuck Norris')
                }
                message={message ?? fromChack}
                date={date.toLocaleString()}
              />
            );
          })
          //   chackMessages.map(message => {
          //     return <ChatMessage key={nanoid()} message={message} />;
          //   })
        )}
        <div ref={divRef} />
      </ConversationChatField>
      <Inputbar onChatSubmit={handleSendMessage} />
    </ConversationWrapper>
  );
};
