import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameters = (queryParamName) => {
  const location = useLocation();

  return (new URLSearchParams(location.search)).get(queryParamName);
}

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value.trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    if (location.pathname.split("/").length > 2) {
      const newPath = location.pathname.split("/").slice(0, 2).join("/");
      console.log(newPath)
      history.push(`${newPath}?${searchParams.toString()}`);
    } else {
      history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    
  };
};