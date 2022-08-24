import styled from '@emotion/styled';

export const StyledLi = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #cacaca;
  background-color: #ffffff;
  background-color: ${activeUserBg =>
    activeUserBg.activeUserBg ? '#cacaca' : '#ffffff'};

  &:hover {
    background-color: #dddddd;
  }
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
  /* height: 10px;
  width: 10px; */
  border-radius: 50%;
  color: ${user => (user.isOnline ? 'green' : 'red')};
`;

export const StyledH3 = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #707070;
`;
export const StyledP = styled.p`
  font-size: 12px;
  color: #999999;
  max-width: 140px;
`;

export const StyledUserInfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
export const StyledDate = styled.p`
  font-size: 12px;
  color: #707070;
  margin-left: auto;
`;
