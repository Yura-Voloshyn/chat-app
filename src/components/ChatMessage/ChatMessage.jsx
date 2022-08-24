import {
  StyledMessage,
  StyledDate,
  StyledPhotoInChat,
  StyledChatLi,
  StyledMessagerapper,
  AvatarAndMessageWrapper,
} from './ChatMessage.styled';

const ChatMessage = ({ message, date, isMine, avatar, name }) => {
  return (
    <StyledChatLi isMine={isMine}>
      <AvatarAndMessageWrapper>
        {!isMine && <StyledPhotoInChat src={avatar} alt={name} />}

        <StyledMessagerapper isMine={isMine}>
          <StyledMessage isMine={isMine}>{message}</StyledMessage>
          <StyledDate isMine={isMine}>{date}</StyledDate>
        </StyledMessagerapper>
      </AvatarAndMessageWrapper>
    </StyledChatLi>
  );
};
export default ChatMessage;
