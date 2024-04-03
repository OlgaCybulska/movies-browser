import { useState } from "react";
import { InputWrapper, StyledForm, StyledInput, StyledSearchIcon } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchContent } from "../NavBar/navBarSlice";
import { useQueryParameters, useReplaceQueryParameter } from "../../../utils/queryParams";
import { searchBarParamName } from "../../../utils/searchBarParamName";
import { fetchData } from "../../../utils/API/dataSlice";
import { useDataURL } from "../../../utils/API/useDataURL";

const SearchBar = () => {
  const [query, setQuery] = useState(useQueryParameters(searchBarParamName) || "");
  const searchContent = useSelector(selectSearchContent);
  const replaceQueryParameter = useReplaceQueryParameter();
  const dispatch = useDispatch();
  const dataURL = useDataURL(query);

  const onInputChange = (target) => {
    setQuery(target.value);

    replaceQueryParameter({
      key: searchBarParamName,
      value: target.value.trim() !== "" ? target.value.trim() : "",
    })
    console.log(dataURL);
    dispatch(fetchData(dataURL));
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
