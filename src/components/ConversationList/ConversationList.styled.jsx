import styled from '@emotion/styled';

export const ConversationListWrapper = styled.div`
  border-top: 1px solid #cacaca;
  background-color: #fff;
  /* overflow-y: auto; */
  /* padding: 10px; */
`;

export const ConversationInnerList = styled.ul`
  list-style-type: none;
  max-height: 400px;
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
export const ConversationListTitle = styled.h2`
  padding: 20px 10px 30px 10px;
  font-weight: 400;
  color: #00dbeb;
`;
