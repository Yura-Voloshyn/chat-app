import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import {
  ConversationWrapper,
  ConversationUserName,
  ConversationChatField,
} from './Conversation.styled';
import Inputbar from '../Inputbar';
import ChatMessage from '../ChatMessage/ChatMessage';
import getApiResult from 'services/apiRandomMessage';

// const chatField = window.document.querySelector('.forScroll');
// console.log(chatField);
let timeoutId = null;
export const Conversation = () => {
  const [messages, setMessages] = useState(() => {
    return JSON.parse(window.localStorage.getItem('user-chat')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('user-chat', JSON.stringify(messages));
  }, [messages]);
  //   const [chackMessages, setChackMessages] = useState('');
  //   const [chackMessages, setChackMessages] = useState('');
  //   const setRef = useCallback(node => {
  //     if (node) {
  //       node.scrollIntoView({ smooth: true });
  //     }
  //   }, []);

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // getFetch();
  //   useEffect(() => {
  //     async function getFetch() {
  //       try {
  //         const chackMessage = await getApiResult();
  //         // console.log(chackMessage);
  //         setMessages(prevMessage => [...prevMessage, chackMessage.value]);
  //       } catch (error) {
  //         console.log('eror');
  //       }
  //     }
  //     // window.setTimeout(function () {
  //     //   getFetch();
  //     // }, 5000);
  //     getFetch();
  //   }, []);
  const chackMessageRecive = () => {
    if (timeoutId !== null) {
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
    }, 1000);
  };
  // 4392.08;
  const handleSendMessage = message => {
    if (message.trim() === '') {
      return;
    }

    setMessages(prevMessage => [...prevMessage, message]);
    chackMessageRecive();
  };
  // align-self: ${message =>
  //     message.includes('Chuck Norris') ? 'flex-end' : 'flex-start'};
  /* align-self: flex-end; */
  return (
    <ConversationWrapper>
      <ConversationUserName>Name</ConversationUserName>
      <ConversationChatField>
        {!messages.length ? (
          <p>Start your conversation</p>
        ) : (
          messages.map(message => {
            const fromChack =
              message.toLowerCase().includes('Chuck Norris') ||
              message.includes('CHUCK NORRIS');
            return (
              <ChatMessage
                key={nanoid()}
                fromChack={
                  message.includes('CHUCK NORRIS') ||
                  message.includes('Chuck Norris')
                }
                message={message ?? fromChack}
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
