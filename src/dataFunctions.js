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
//hito 4
//Esta función calcula el promedio del nivel de picante de los platillos.
export function computeAverageSpiciness(data) {   
  const totalSpiciness = data.reduce((sum, item) => sum + item.spiciness, 0);     //reduce es un método de los arrays en JavaScript que aplica una función sobre un acumulador (en este caso sum) y cada elemento del array (item) para reducirlo a un único valor.
  const averageSpiciness = totalSpiciness / data.length;
  return averageSpiciness.toFixed(2);                                            //sum + item.spiciness suma el nivel de picante (spiciness) de cada platillo al acumulador sum.
}  //  Divide la suma total del picante (totalSpiciness) por la cantidad de platillos (data.length) para obtener el promedio     //  0 es el valor inicial del acumulador sum.    El resultado de reduce es la suma total de los niveles de picante de todos los platillos.           // 

//Esta función encuentra el platillo más picante.
export function computeHottestDish(data) {
  return data.reduce((hottest, item) => (item.spiciness > hottest.spiciness ? item : hottest), data[0]); //reduce recorre cada platillo (item) comparando su nivel de picante (item.spiciness) con el del platillo más picante encontrado hasta el momento (hottest.spiciness).Si el nivel de picante del platillo actual es mayor que el del platillo más picante encontrado hasta ahora, actualiza hottest con el platillo actual (item), de lo contrario, mantiene hottest. data[0] es el valor inicial de hottest, comenzando con el primer platillo del array.

}

//Esta función encuentra el platillo menos picante.
export function computeMildestDish(data) {   //Similar a computeHottestDish, pero compara si el nivel de picante del platillo actual es menor que el del platillo menos picante encontrado hasta el momento.
  return data.reduce((mildest, item) => (item.spiciness < mildest.spiciness ? item : mildest), data[0]); //Si el nivel de picante del platillo actual es menor, actualiza mildest con el platillo actual (item), de lo contrario, mantiene mildest.
}

//Esta función clasifica los platillos en niveles de picante: leve, medio y alto.
export function computeSpicinessLevels(data) { 
  return data.reduce((levels, item) => {  //levels es un objeto que inicializa los contadores de cada nivel de picante (mild, medium, hot) a 0.
    if (item.spiciness < 3) levels.mild++;  //Si el nivel de picante es menor que 3, incrementa el contador de mild.
    else if (item.spiciness < 7) levels.medium++;  //Si el nivel de picante es menor que 7 pero mayor o igual a 3, incrementa el contador de medium.
    else levels.hot++;   //Si el nivel de picante es mayor o igual a 7, incrementa el contador de hot.
    return levels;            //El objeto levels con los contadores actualizados se devuelve al final.
  }, { mild: 0, medium: 0, hot: 0 });
}

//Esta función cuenta cuántos platillos tienen un nivel de picante por encima de un umbral (threshold) dado.
export function computeCountAboveThreshold(data, threshold) { //es un método de los arrays en JavaScript que crea un nuevo array con todos los elementos que pasan una prueba definida por una función. La función (item => item.spiciness > threshold) verifica si el nivel de picante de cada platillo es mayor que el umbral (threshold).
  return data.filter(item => item.spiciness > threshold).length;  //El resultado de filter es un nuevo array con los platillos que tienen un nivel de picante mayor que el umbral. length Devuelve la cantidad de elementos en el array filtrado, es decir, el número de platillos con un nivel de picante mayor que el umbral.
}
