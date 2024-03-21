import { useSelector } from "react-redux";
import { selectSearchContent } from "../../features/SiteHeader/NavBar/navBarSlice";
import { selectPage } from "../../common/Pagination/paginationSlice";

export const useListDataURL = (itemId) => {
  const apiKey = "741487ab9378f09398cb15784041196d"
  const language = "en-US"

  const searchContent = useSelector(selectSearchContent);
  const page = useSelector(selectPage);
  let apiSearchContent;

  switch(searchContent) {
    case "movies":
      apiSearchContent = "movie";
      break;
    case "people":
      apiSearchContent = "person";
      break;
  }

  return `https://api.themoviedb.org/3/${apiSearchContent}/${itemId ? itemId : "popular"}?api_key=${apiKey}&language=${language}&page=${page}`;
}