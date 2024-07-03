// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => { //H3-1.3 
  
  const filtroTipoPlatos = data.filter((item) => item.facts[filterBy] === value);
  return filtroTipoPlatos;
  
};

export const sortData = (data, sortBy, sortOrder) => { // se caMbia ANOTHERNXAMPLE POR SORTBY
  return [];
};

export const computeStats = (data) => { // se AÑANDE COMPUTESTATS readme-datafuntions-5.3 OJO segun creo LAS EXPORT debe tener su lugar de IMPORT(main) (h3.2-3,4)
  return [];
};

