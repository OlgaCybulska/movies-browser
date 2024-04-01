export const saveInLocalStorage = (genres, localStorageKey) =>
  localStorage.setItem(localStorageKey, JSON.stringify(genres));

export const getFromLocalStorage = (localStorageKey) =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
