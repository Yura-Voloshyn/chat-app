import { StyledMessage, StyledDate } from './ChatMessage.styled';

const ChatMessage = ({ message, fromChack, date }) => {
  return (
    <>
      <StyledMessage fromChack={fromChack}>{message}</StyledMessage>
      <StyledDate fromChack={fromChack}>{date}</StyledDate>
    </>
  );
};
export default ChatMessage;
