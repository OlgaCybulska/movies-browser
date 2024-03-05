import { InputWrapper, StyledForm, StyledInput, StyledSearchIcon } from "./styled";

const SearchBar = () => (
  <StyledForm>
    <InputWrapper>
      <StyledSearchIcon />
      <StyledInput placeholder={"Search for movies..."} />
    </InputWrapper>
  </StyledForm>
);

export default SearchBar;