export const saveGenresInLocalStorage = (genres, localStorageKey) =>
  localStorage.setItem(localStorageKey, JSON.stringify(genres));

export const getGenresFromLocalStorage = (localStorageKey) =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
