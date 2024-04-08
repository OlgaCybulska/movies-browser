// Data formatting functions:
export const formatYear = (d) => d.split("-")[0];

export const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
};

export const formatCountries = (c) => {
  return c.map((country) => country.name).join(", ");
};

export const formatRate = (r) => r.toFixed(1).replace(".", ",");
