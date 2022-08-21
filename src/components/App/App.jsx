import { ChatWrapper } from '../ChatWrapper/ChatWrapper';
import { StyledContainer } from './App.styled';
import { useEffect } from 'react';
import { getStorageItem, initialStorage } from 'services/useLocalStorage';

export const App = () => {
  useEffect(() => {
    const history = getStorageItem('history');
    if (!history) {
      initialStorage();
    }
  }, []);
  return (
    <StyledContainer>
      <ChatWrapper />
    </StyledContainer>
  );
};
