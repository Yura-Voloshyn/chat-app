import {
  StyledFormWrapper,
  StyledForm,
  StyledFormBtn,
  StyledSpan,
  StyledInput,
} from './Inputbar.styled';

// import 'react-toastify/dist/ReactToastify.css';

// import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';
import { useState } from 'react';

const Inputbar = ({ onChatSubmit }) => {
  const [message, setMessage] = useState('');

  const handleInputValue = e => {
    setMessage(e.currentTarget.value);
  };
  const handleChatSubmit = e => {
    e.preventDefault();
    onChatSubmit(message);
    setMessage('');
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleChatSubmit}>
        <StyledInput
          onChange={handleInputValue}
          message={message}
          value={message}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Type your message"
        />
        <StyledFormBtn type="submit">
          <IoIosSend
            style={{
              position: 'absolute',
              display: 'block',
              width: '25',
              height: '25',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <StyledSpan>Search</StyledSpan>
        </StyledFormBtn>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Inputbar;
