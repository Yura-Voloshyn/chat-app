// ConversationListItem,
//   ConversationListItemImage,
//   ConversationListItemContext,
import styled from '@emotion/styled';

export const StyledLi = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px;
`;

export const ConversationListItemImage = styled.img`
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

export const FriendOnlineStatus = styled.span`
  position: absolute;
  left: 40px;
  bottom: 4px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${user => (user.isOnline ? 'green' : 'red')};
`;

export const StyledH3 = styled.h3`
  font-size: 14;
  font-weight: 400;
  color: #707070;
`;
export const StyledP = styled.p`
  font-size: 10px;
  color: #999999;
`;
