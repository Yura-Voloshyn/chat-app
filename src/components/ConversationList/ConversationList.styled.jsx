import styled from '@emotion/styled';

export const ConversationListWrapper = styled.div`
  border-top: 1px solid #cacaca;
  background-color: #fff;
  overflow-y: auto;
  /* padding: 10px; */
`;

export const ConversationInnerList = styled.ul`
  list-style-type: none;
`;
export const ConversationListTitle = styled.h2`
  padding: 20px 10px 30px 10px;
  font-weight: 400;
  color: #00dbeb;
`;
export const ConversationListItem = styled.li`
  display: flex;

  align-items: center;
  padding: 10px;
`;

export const ConversationListImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
`;

export const ConversationListItemContext = styled.div`
  margin-left: 10px;
  width: 100%;
`;
