import { useSelector } from "react-redux";
import { selectSearchContent } from "../../features/SiteHeader/NavBar/navBarSlice";
import { selectPage } from "../../common/Pagination/paginationSlice";

export const useListDataURL = () => {
  const apiKey = "741487ab9378f09398cb15784041196d"
  const language = "en-US"

  const searchContent = useSelector(selectSearchContent);
  const page = useSelector(selectPage);

  return `https://api.themoviedb.org/3/${searchContent}/popular?api_key=${apiKey}&language=${language}&page=${page}`;
}