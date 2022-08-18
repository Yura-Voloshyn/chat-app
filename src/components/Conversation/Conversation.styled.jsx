import styled from '@emotion/styled';

export const ConversationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 70vw;
  background-color: #eeeeee;
`;

export const ConversationUserName = styled.h2`
  padding: 10px;
`;

export const ConversationChatField = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: end;

  border-top: 1px solid #cacaca;
  background-color: #f8f8f8;
  padding: 10px;
  height: 100%;
  overflow-y: auto;
`;
