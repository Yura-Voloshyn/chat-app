import {
  StyledFormWrapper,
  StyledForm,
  StyledSearchFormBtn,
  StyledSpan,
  StyledInput,
} from './Inputbar.styled';

// import 'react-toastify/dist/ReactToastify.css';

// import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';
import { useState } from 'react';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputValue = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   onFormSubmit(searchQuery);
  //   setSearchQuery('');
  // };
  // IoIosSend;
  return (
    <StyledFormWrapper>
      <StyledForm>
        <StyledInput
          onChange={handleInputValue}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Type your message"
        />
        <StyledSearchFormBtn type="submit">
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
        </StyledSearchFormBtn>
      </StyledForm>
    </StyledFormWrapper>
  );
};
// class Searchbar1 extends Component {
//   state = {
//     searchQuery: '',
//   };
//   handleImputValue = e => {
//     this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
// if (this.state.searchQuery.trim() === '') {
//   toast('can`t be empty');
//   return;
// }
//
//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };
//   render() {
//     return (
//       <StyledHeader>
//         <StyledForm onSubmit={this.handleSubmit}>
//           <StyledSearchFormBtn type="submit">
//             <AiOutlineSearch
//               style={{
//                 width: '20',
//                 height: '20',
//                 verticalAlign: 'middle',
//               }}
//             />
//             <StyledSpan>Search</StyledSpan>
//           </StyledSearchFormBtn>

//           <StyledInput
//             onChange={this.handleImputValue}
//             value={this.state.searchQuery}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </StyledForm>
//       </StyledHeader>
//     );
//   }
// }

export default Searchbar;
