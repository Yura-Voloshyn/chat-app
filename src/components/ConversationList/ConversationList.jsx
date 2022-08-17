import {
  ConversationListWrapper,
  ConversationInnerList,
  ConversationListTitle,
} from './ConversationList.styled';

import { ConversationListItem } from '../ConversationListItem/ConversationListItem';

// import FriendListItem from './FriendListItem';
// import friends from '../jsonData/friends.json';
// import FriendListItem from './FriendListItem';
// const FriendList = ({friends}) => {
//   return (
//     <ul className="friend-list">
//       {friends.map(friend => (
//         <FriendListItem
//           key={friend.id}
//           avatar={friend.avatar}
//           name={friend.name}
//           isOnline={friend.isOnline}
//         />
//       ))}
//     </ul>
//   );
// };

export const ConversationList = ({ users, onDeleteContact }) => {
  return (
    <ConversationListWrapper>
      <ConversationListTitle>Chat</ConversationListTitle>
      <ConversationInnerList>
        {users.map(({ id, name, avatar, isOnline }) => (
          <ConversationListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            onDeleteContact={() => onDeleteContact(id)}
          />
        ))}
      </ConversationInnerList>
    </ConversationListWrapper>
  );
};
