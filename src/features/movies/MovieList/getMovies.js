import { getMoviesURL } from "./moviesUrl";

export const getMovies = async () => {
  const response = await fetch(getMoviesURL);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
