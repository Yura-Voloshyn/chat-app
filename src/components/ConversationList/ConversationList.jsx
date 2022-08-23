import {
  ConversationListWrapper,
  ConversationInnerList,
  ConversationListTitle,
} from './ConversationList.styled';
import { getLastUserMessage } from 'services/useLocalStorage';
import { ConversationListItem } from '../ConversationListItem/ConversationListItem';

export const ConversationList = ({
  users,
  onUserClick,
  userDate,
  message,
  activeUserId,
}) => {
  // const getUserMsg = id => {
  //   const lastObj = getLastUserMessage(id);
  //   if (!lastObj) {
  //     return;
  //   }
  //   const message = lastObj.message.slice(0, 40);
  //   const userDate = lastObj.lastMsgDate;
  //   return { message, userDate };
  // };

  return (
    <ConversationListWrapper>
      <ConversationListTitle>Chat</ConversationListTitle>
      <ConversationInnerList>
        {users.map(({ id, name, avatar, isOnline }) => {
          const lastMessage = getLastUserMessage(id);
          let messageText = lastMessage?.message;
          let messageDate = lastMessage?.usrDate;
          if (activeUserId === id) {
            messageText = message;
            messageDate = userDate;
          }
          return (
            <ConversationListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              message={messageText}
              userDate={messageDate}
              // lastUserMessage={getUserMsg(id)}
              // onDeleteContact={() => onDeleteContact(id)}
              onUserClick={() => onUserClick(id, name, avatar)}
            />
          );
        })}
      </ConversationInnerList>
    </ConversationListWrapper>
  );
};
