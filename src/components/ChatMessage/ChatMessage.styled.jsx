import styled from '@emotion/styled';
export const StyledMessage = styled.p`
  display: flex;
  flex-direction: column;

  max-width: 80%;
  white-space: pre-line;
  margin-top: 10px;
  align-self: ${message => (message.fromChack ? 'flex-start' : 'flex-end')};
  /* align-self: flex-end; */
  padding: 4px 8px;
  background-color: ${message => (message.fromChack ? '#44435c' : '#cacaca')};
  color: ${message => (message.fromChack ? '#fff' : '#000')};
  border-radius: 15px;
`;
