import { useState } from "react";
import { InputWrapper, StyledForm, StyledInput, StyledSearchIcon } from "./styled";
import { useSelector } from "react-redux";
import { selectSearchMode } from "../NavBar/navBarSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const searchMode = useSelector(selectSearchMode);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <StyledSearchIcon />
        <StyledInput
          placeholder={`Search for ${searchMode}...`}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </InputWrapper>
    </StyledForm>
  );
}

export default SearchBar;