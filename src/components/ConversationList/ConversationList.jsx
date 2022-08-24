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
              onUserClick={() => onUserClick(id, name, avatar)}
            />
          );
        })}
      </ConversationInnerList>
    </ConversationListWrapper>
  );
};
