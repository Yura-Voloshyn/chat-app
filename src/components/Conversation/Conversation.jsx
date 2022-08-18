import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  ConversationWrapper,
  ConversationUserName,
  ConversationChatField,
} from './Conversation.styled';
import Inputbar from '../Inputbar';
import ChatMessage from '../ChatMessage/ChatMessage';
import getApiResult from 'services/apiRandomMessage';

export const Conversation = () => {
  const [messages, setMessages] = useState('');
  useEffect(() => {
    async function getFetch() {
      try {
        const chackMessage = await getApiResult();
        console.log(chackMessage);
        setMessages(prevMessage => [...prevMessage, chackMessage.value]);
      } catch (error) {
        console.log('eror');
      }
    }
    getFetch();
  }, [setMessages]);

  const handleSendMessage = message => {
    setMessages(prevMessage => [...prevMessage, message]);
    // console.log(messages);
  };
  return (
    <ConversationWrapper>
      <ConversationUserName>Name</ConversationUserName>
      <ConversationChatField>
        {!messages.length ? (
          <p>Start your conversation</p>
        ) : (
          messages.map(message => {
            return <ChatMessage key={nanoid()} message={message} />;
          })
        )}
      </ConversationChatField>
      <Inputbar onChatSubmit={handleSendMessage} />
    </ConversationWrapper>
  );
};
