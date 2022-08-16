import Searchbar from '../Searchbar';
import { ConversationList } from '../ConversationList/ConversationList';
import { SidePartWrapper } from './SidePart.styled';
export const SidePart = () => {
  return (
    <SidePartWrapper>
      <Searchbar />
      <ConversationList />
    </SidePartWrapper>
  );
};
