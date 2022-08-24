import {
  StyledLi,
  ConversationListItemImage,
  ConversationListItemContext,
  FriendOnlineStatus,
  StyledH3,
  StyledP,
  StyledUserInfoWrapper,
  StyledDate,
} from './ConversationListItem.styled';
import { AiFillCheckCircle } from 'react-icons/ai';

export const ConversationListItem = ({
  avatar,
  name,
  isOnline,
  id,
  onUserClick,
  userDate,
  message,
}) => {
  return (
    <StyledLi onClick={() => onUserClick(id, name, avatar)}>
      {' '}
      <ConversationListItemImage src={avatar} alt={name} width="48" />{' '}
      <ConversationListItemContext>
        {' '}
        <StyledUserInfoWrapper>
          <StyledH3>{name}</StyledH3>
          <StyledDate>{userDate}</StyledDate>
        </StyledUserInfoWrapper>
        <StyledP>{message || ''}</StyledP>
      </ConversationListItemContext>{' '}
      <FriendOnlineStatus isOnline={isOnline}>
        {' '}
        {isOnline && (
          <AiFillCheckCircle style={{ width: '15px', height: '15px' }} />
        )}
      </FriendOnlineStatus>
    </StyledLi>
  );
};
