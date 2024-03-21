export const getData = async (apiURL) => {
  const response = await fetch(apiURL);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
