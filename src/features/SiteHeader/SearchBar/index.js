import { useState } from "react";
import { InputWrapper, StyledForm, StyledInput, StyledSearchIcon } from "./styled";
import { useSelector } from "react-redux";
import { selectSearchContent } from "../NavBar/navBarSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const searchContent = useSelector(selectSearchContent);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <StyledSearchIcon />
        <StyledInput
          placeholder={`Search for ${searchContent}...`}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </InputWrapper>
    </StyledForm>
  );
}

export default SearchBar;