export const localStorageKey = "genres";

export const saveGenresInLocalStorage = (genres) =>
  localStorage.setItem(localStorageKey, JSON.stringify(genres));

export const getGenresFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
