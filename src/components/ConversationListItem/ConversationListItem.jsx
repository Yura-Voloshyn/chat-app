import {
  StyledLi,
  ConversationListItemImage,
  ConversationListItemContext,
  FriendOnlineStatus,
} from './ConversationListItem.styled';
// import { GrStatusGood } from 'react-icons/gr';

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
}) => {
  return (
    <StyledLi style={{ borderBottom: '1px solid #cacaca' }}>
      {' '}
      <ConversationListItemImage src={avatar} alt={name} width="48" />{' '}
      <ConversationListItemContext>
        {' '}
        <h3>{name}</h3> <p>Lorem, ipsum dolor.</p>{' '}
      </ConversationListItemContext>{' '}
      <FriendOnlineStatus isOnline={isOnline}>
        {' '}
        {/* <GrStatusGood
          
        />{' '} */}
      </FriendOnlineStatus>
      <button onClick={() => onDeleteContact(id)}>x</button>
    </StyledLi>
  );
};
