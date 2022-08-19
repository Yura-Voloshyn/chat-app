import { StyledMessage } from './ChatMessage.styled';

const ChatMessage = ({ message, fromChack }) => {
  return <StyledMessage fromChack={fromChack}>{message}</StyledMessage>;
};
export default ChatMessage;
