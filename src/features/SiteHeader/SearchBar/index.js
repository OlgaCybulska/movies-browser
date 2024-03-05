import { useState } from "react";
import { InputWrapper, StyledForm, StyledInput, StyledSearchIcon } from "./styled";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
};

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <StyledSearchIcon />
        <StyledInput 
          placeholder={"Search for movies..."}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          />
      </InputWrapper>
    </StyledForm>
  );
}

export default SearchBar;