import { getMoviesURL } from "../../../utils/API/getMoviesURL";

export const getMovies = async (page) => {
  const response = await fetch(`${getMoviesURL}}&page=${page}`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
