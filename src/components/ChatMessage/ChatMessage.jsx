import { StyledMessage, StyledDate } from './ChatMessage.styled';

const ChatMessage = ({ message, date, isMine }) => {
  return (
    <>
      <StyledMessage isMine={isMine}>{message}</StyledMessage>
      <StyledDate isMine={isMine}>{date}</StyledDate>
    </>
  );
};
export default ChatMessage;
