// Filtra los datos según una propiedad y un valor específicos
export const filterData = (data, property, value) => {    //filtra un array de objetos (data) según una propiedad específica (property) y un valor específico (value
  return data.filter(item => item.facts[property] && item.facts[property].toLowerCase() === value.toLowerCase());   //property: El nombre de la propiedad dentro de cada objeto (item) en data que se utilizará para hacer el filtro. value: El valor que se busca en la propiedad property. data: El array de objetos que se desea filtrar.
};   //Dentro de la función de filtro (item => ...), verifica si item.facts[property] existe y si su valor, convertido a minúsculas con .toLowerCase(), es estrictamente igual (===) al valor value convertido también a minúsculas.

// Ordena los datos según una propiedad específica   //ordena un array de objetos (data) según el valor de una propiedad específica (property).
export const sortData = (data, property, ascending = true) => {         
  return data.sort((a, b) => {
    if (a[property] < b[property]) return ascending ? -1 : 1;
    if (a[property] > b[property]) return ascending ? 1 : -1;
    return 0;
  });
};

// src/dataFunctions.js
export function computeAverageSpiciness(data) {
  const totalSpiciness = data.reduce((sum, item) => sum + item.spiciness, 0);
  return totalSpiciness / data.length;
}

export function computeHottestDish(data) {
  return data.reduce((hottest, item) => (item.spiciness > hottest.spiciness ? item : hottest), data[0]);
}

export function computeMildestDish(data) {
  return data.reduce((mildest, item) => (item.spiciness < mildest.spiciness ? item : mildest), data[0]);
}

export function computeSpicinessLevels(data) {
  return data.reduce((levels, item) => {
    if (item.spiciness < 3) levels.mild++;
    else if (item.spiciness < 7) levels.medium++;
    else levels.hot++;
    return levels;
  }, { mild: 0, medium: 0, hot: 0 });
}

export function computeCountAboveThreshold(data, threshold) {
  return data.filter(item => item.spiciness > threshold).length;
}
