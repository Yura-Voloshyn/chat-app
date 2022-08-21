import {
  StyledLi,
  ConversationListItemImage,
  ConversationListItemContext,
  FriendOnlineStatus,
  StyledH3,
  StyledP,
} from './ConversationListItem.styled';
import { AiFillCheckCircle } from 'react-icons/ai';

// export const FriendListItem = ({ avatar, name, isOnline }) => {
//   return (
//     <li className="item">
//       <span className={isOnline ? 'active' : 'inactive'}></span>
//       <img className="avatar" src={avatar} alt={name} width="48" />
//       <p className="name">{name}</p>
//     </li>
//   );
// };
export const ConversationListItem = ({
  avatar,
  name,
  isOnline,
  id,
  onDeleteContact,
  onUserClick,
}) => {
  return (
    <StyledLi
      onClick={() => onUserClick(id, name, avatar)}
      style={{ borderBottom: '1px solid #cacaca' }}
    >
      {' '}
      <ConversationListItemImage src={avatar} alt={name} width="48" />{' '}
      <ConversationListItemContext>
        {' '}
        <StyledH3>{name}</StyledH3> <StyledP>Lorem, ipsum dolor.</StyledP>{' '}
      </ConversationListItemContext>{' '}
      <FriendOnlineStatus isOnline={isOnline}>
        {' '}
        {isOnline && (
          <AiFillCheckCircle style={{ width: '15px', height: '15px' }} />
        )}
      </FriendOnlineStatus>
      {/* <button
        style={{
          cursor: 'pointer',
          fontSize: '10px',
          color: '#707070',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          border: 'none',
          padding: '2px',
          outline: 'none',
        }}
        onClick={() => onDeleteContact(id)}
      >
        x
      </button> */}
    </StyledLi>
  );
};
