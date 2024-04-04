import { useState, useEffect } from "react";
import { InputWrapper, StyledForm, StyledInput, StyledSearchIcon } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchContent } from "../NavBar/navBarSlice";
import { useQueryParameters, useReplaceQueryParameter } from "../../../utils/queryParams";
import { searchBarParamName } from "../../../utils/searchBarParamName";
import { fetchData } from "../../../utils/API/dataSlice";
import { useDataURL } from "../../../utils/API/useDataURL";
import { setPage } from "../../../common/Pagination/paginationSlice";

const SearchBar = () => {
  const [query, setQuery] = useState(useQueryParameters(searchBarParamName) || "");
  const searchContent = useSelector(selectSearchContent);
  const replaceQueryParameter = useReplaceQueryParameter();
  const dispatch = useDispatch();
  const dataURL = useDataURL(query);

  useEffect(() => {
    dispatch(setPage(1));
  }, [query, dispatch])

  useEffect(() => {
    if (query.trim() !== "") {
      console.log(dataURL);
      dispatch(fetchData(dataURL));
    }
  }, [dataURL, query, dispatch]);

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
