import styled from '@emotion/styled';
export const StyledMessage = styled.p`
  display: flex;
  flex-direction: column;

  max-width: 80%;
  white-space: pre-line;
  margin-top: 10px;
  align-self: ${message => (!message.isMine ? 'flex-start' : 'flex-end')};
  /* align-self: flex-end; */
  padding: 4px 8px;
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
