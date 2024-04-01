export const genresLocalStorageKey = "genres";

export const saveInLocalStorage = (data, localStorageKey) =>
  localStorage.setItem(localStorageKey, JSON.stringify(data));

export const getFromLocalStorage = (localStorageKey) =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
