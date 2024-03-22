import { useLocation } from "react-router-dom/cjs/react-router-dom";

export const useDataURL = (searchContent, page) => {
  const location = useLocation();

  const apiKey = "741487ab9378f09398cb15784041196d"
  const language = "en-US"

  const itemId = location.pathname.split("/")[2];
  const query = false;

  let apiSearchContent;

  switch (searchContent) {
    case "movies":
      apiSearchContent = "movie";
      break;
    case "people":
      apiSearchContent = "person";
      break;
  }

  if (!query) {
    return `https://api.themoviedb.org/3/${apiSearchContent
      }/${itemId ? itemId : "popular"
      }?api_key=${apiKey
      }&language=${language
      }&page=${page}`;
  }

  return `https://api.themoviedb.org/3/search/${apiSearchContent
    }?query=${query
    }&api_key=${apiKey
    }&include_adult=${true
    }&language=${language
    }&page=${page
    }`;
}