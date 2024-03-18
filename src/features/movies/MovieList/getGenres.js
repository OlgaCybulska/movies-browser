import { getGenresURL } from "../../../utils/API/getMoviesURL";
import {
  localStorageKey,
  getTasksFromLocalStorage,
} from "../../../utils/API/genresLocalStorage";

export const getGenres = async () => {
  try {
    const localStorageState = localStorage.getItem(localStorageKey);

    if (localStorageState !== null) {
      return await getTasksFromLocalStorage();
    } else {
      const response = await fetch(getGenresURL);

      if (!response.ok) {
        new Error(response.statusText);
      }

      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};
