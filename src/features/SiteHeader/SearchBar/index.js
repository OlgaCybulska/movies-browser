import { useState } from "react";
import { InputWrapper, StyledForm, StyledInput, StyledSearchIcon } from "./styled";
import { useSelector } from "react-redux";
import { selectSearchContent } from "../NavBar/navBarSlice";
import { useReplaceQueryParameter } from "../../../utils/queryParams";
import { searchBarParamName } from "../../../utils/searchBarParamName";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const searchContent = useSelector(selectSearchContent);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = (target) => {
    setQuery(target.value);

    replaceQueryParameter({
      key: searchBarParamName,
      value: target.value.trim() !== "" ? target.value.trim() : "",
    })
  };

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
          onChange={(event) => onInputChange(event.target)}
        />
      </InputWrapper>
    </StyledForm>
  );
}

export default SearchBar;
