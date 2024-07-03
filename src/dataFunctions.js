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


/* Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

// eslint-disable-next-line no-unused-vars
export const filterData = (data, filterBy, value) => { //H3-1.3 
  return 'filterData';
};

export const sortData = (data, sortBy, sortOrder) => { // se caMbia ANOTHERNXAMPLE POR SORTBY
  return [];
};

export const computeStats = (_data) => { // se AÑANDE COMPUTESTATS readme-datafuntions-5.3 OJO segun creo LAS EXPORT debe tener su lugar de IMPORT(main) (h3.2-3,4)
  return [];
};
*/
