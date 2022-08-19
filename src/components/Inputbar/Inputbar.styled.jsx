import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';
<AiOutlineSearch />;

export const StyledFormWrapper = styled.div`
  /* min-height: 64px; */
  display: inline-block;
  background-color: #eeeeee;
  padding: 10px;
  border-top: 1px solid #cacaca;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  /* height: 100%; */
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid gray;
  border-radius: 25px;
`;

export const StyledFormBtn = styled.button`
  display: inline-block;
  width: 50px;
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
  display: inline-block;
  width: 100%;

  font: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  padding: 4px 16px;
  resize: none;
  /* padding-left: 16px;
  padding-right: 4px; */
  /* size: 50px; */
  &::placeholder {
    font: inherit;
    /* text-align: center; */
    vertical-align: middle;
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
