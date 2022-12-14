import styled from '@emotion/styled';

export const ConversationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 70vw;
  background-color: #eeeeee;
`;

export const ConversationUserName = styled.h2`
  font-weight: 500;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ConversationChatField = styled.ul`
  display: flex;
  flex-direction: column;

  /* justify-content: end; */
  align-items: flex-start;
  border-top: 1px solid #cacaca;
  background-color: #f8f8f8;
  padding: 10px;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 100%;
  }
  &::-webkit-scrollbar-track {
    background: #cacaca;
  }
  &::-webkit-scrollbar-thumb {
    background: #777777;
    border-radius: 5px;
  }
`;
export const ConversationUserAvatar = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
`;
