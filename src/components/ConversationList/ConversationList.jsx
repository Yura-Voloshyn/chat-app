import {
  ConversationListWrapper,
  ConversationInnerList,
  ConversationListItem,
  ConversationListImage,
  ConversationListItemContext,
  ConversationListTitle,
} from './ConversationList.styled';

export const ConversationList = () => {
  return (
    <ConversationListWrapper>
      <ConversationListTitle>Chats</ConversationListTitle>
      <ConversationInnerList>
        <ConversationListItem style={{ borderBottom: '1px solid #cacaca' }}>
          {' '}
          <ConversationListImage src="" alt="" />{' '}
          <ConversationListItemContext>
            {' '}
            <h3>user</h3> <p>chattext</p>{' '}
          </ConversationListItemContext>{' '}
        </ConversationListItem>
      </ConversationInnerList>
    </ConversationListWrapper>
  );
};
