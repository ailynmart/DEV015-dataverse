// Filtra los datos según una propiedad y un valor específicos
export const filterData = (data, property, value) => {
  return data.filter(item => item.facts[property] && item.facts[property].toLowerCase() === value.toLowerCase());
};

// Ordena los datos según una propiedad específica
export const sortData = (data, property, ascending = true) => {
  return data.sort((a, b) => {
    if (a[property] < b[property]) return ascending ? -1 : 1;
    if (a[property] > b[property]) return ascending ? 1 : -1;
    return 0;
  });
};


