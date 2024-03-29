import { useSelector } from "react-redux";
import { selectSearchContent } from "../../features/SiteHeader/NavBar/navBarSlice";
import { selectPage } from "../../common/Pagination/paginationSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

export const useAdditionalDataURL = () => {
  const location = useLocation();

  const apiKey = "741487ab9378f09398cb15784041196d"
  const language = "en-US"

  const searchContent = useSelector(selectSearchContent);
  const page = useSelector(selectPage);
  const itemId = location.pathname.split("/")[2];

  let apiSearchContent;

  switch (searchContent) {
    case "movies":
      apiSearchContent = "movie";
      break;
    case "people":
      apiSearchContent = "person";
      break;
  }


  return `https://api.themoviedb.org/3/${apiSearchContent
    }/${itemId
    }/${apiSearchContent = "movie" ? "credits" : "combined_credits"
    }?api_key=${apiKey
    }&language=${language
    }&page=${page}`;
}

