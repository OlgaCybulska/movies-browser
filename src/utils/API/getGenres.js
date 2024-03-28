import { getGenresURL } from "./genresURL";
import { localStorageKey, getGenresFromLocalStorage } from "./localStorage";

export const getGenres = async () => {
  try {
    const localStorageState = localStorage.getItem(localStorageKey);

    if (localStorageState !== null) {
      return await getGenresFromLocalStorage();
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
