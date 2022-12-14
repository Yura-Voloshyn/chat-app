import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';
<AiOutlineSearch />;

export const StyledFormWrapper = styled.div`
  align-items: center;
  min-height: 64px;
  background-color: #eeeeee;
  padding: 10px;
`;
export const LoginWrp = styled.button`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 16px;
  font-size: 11px;
  outline: none;
  border: 1px solid #cacaca;
  cursor: pointer;
  color: black;
`;
export const StyledForm = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid gray;
  border-radius: 20px;
`;

export const StyledSearchFormBtn = styled.span`
  display: inline-block;
  width: 30px;
  height: inherit;
  border: 0;
  background-color: inherit;
  position: relative;
  /* background-image: url('../../icons/search_FILL0_wght400_GRAD0_opsz48.svg'); */

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const StyledSpan = styled.span`
  /* position: absolute; */
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
export const StyledInput = styled.input`
  height: 30px;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  font: inherit;
  font-size: 12px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  size: 50px;
  &::placeholder {
    font: inherit;
    font-size: 12px;
    vertical-align: center;
  }
`;
/*
 * Стили компонента SearchForm
 */
// .SearchForm {

// }

// .SearchForm-button {
//   display: inline-block;
//   width: 48px;
//   height: 48px;
//   border: 0;
//   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
//   background-size: 40%;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.6;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;
// }

// .SearchForm-button:hover {

// }

// .SearchForm-button-label {

// }

// .SearchForm-input {

// }

// .SearchForm-input::placeholder {

// }
