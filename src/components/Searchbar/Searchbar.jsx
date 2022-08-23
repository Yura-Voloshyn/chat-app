import {
  StyledFormWrapper,
  StyledForm,
  StyledSearchFormBtn,
  StyledSpan,
  StyledInput,
  LoginWrp,
} from './Searchbar.styled';
// import { useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineSearch } from 'react-icons/ai';
import { WiAlien } from 'react-icons/wi';

// import { useState } from 'react';

const Searchbar = ({ onChange, value }) => {
  return (
    <StyledFormWrapper>
      <LoginWrp
        type="button"
        onClick={e => {
          e.preventDefault();
        }}
      >
        <WiAlien
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: '39',
            height: '39',
          }}
        />
      </LoginWrp>
      <StyledForm>
        <StyledSearchFormBtn>
          <AiOutlineSearch
            style={{
              position: 'absolute',
              display: 'block',
              width: '14',
              height: '14',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <StyledSpan>Search</StyledSpan>
        </StyledSearchFormBtn>

        <StyledInput
          onChange={onChange}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search or start new chat"
        />
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Searchbar;
