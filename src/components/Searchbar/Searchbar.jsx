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
  // const [name, setName] = useState();
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleInputValue = e => {
  //   setSearchQuery(e.currentTarget.value.toLowerCase());
  // };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit({ name });
  //   reset();
  // };
  // const reset = () => {
  //   setName('');
  // };

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
