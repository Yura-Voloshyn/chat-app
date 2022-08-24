import styled from '@emotion/styled';

export const StyledChatLi = styled.li`
  display: flex;
  flex-direction: column;

  max-width: 80%;
  white-space: pre-line;

  align-self: ${message => (!message.isMine ? 'flex-start' : 'flex-end')};
  /* align-self: flex-end; */
`;
export const StyledMessagerapper = styled.div`
  /* display: flex; */
  display: flex;
  flex-direction: column;
  align-self: ${message => (!message.isMine ? 'flex-start' : 'flex-end')};
`;
export const AvatarAndMessageWrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

export const StyledMessage = styled.p`
  margin-top: 10px;
  padding: 4px 8px;
  align-self: ${message => (!message.isMine ? 'flex-start' : 'flex-end')};
  background-color: ${message => (!message.isMine ? '#44435c' : '#cacaca')};
  color: ${message => (!message.isMine ? '#fff' : '#000')};
  border-radius: 15px;
`;

export const StyledDate = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #969696;
  align-self: ${message => (!message.isMine ? 'flex-start' : 'flex-end')};
`;
export const StyledPhotoInChat = styled.img`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  align-items: center;
  margin-top: 10px;
  margin-right: 5px;
`;
