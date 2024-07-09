import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// Selección del elemento #root 
const rootH = document.querySelector("#root");   //rootH es una referencia al elemento del DOM con el id root. Este elemento servirá como el contenedor principal donde se renderizarán los elementos dinámicos.

// Renderizado inicial de los datos
rootH.appendChild(renderItems(data));  //Se utiliza renderItems(data) para generar y mostrar inicialmente todos los elementos de data en el elemento #root.

let filtrosPlato = data;

// Controladores de eventos para los selectores
const filtroPedido = document.querySelector('[data-testid="select-filter"]');     //filtrosPlato se inicializa con data, lo que permite filtrar y ordenar los datos base inicialmente cargados.
const filtroPicante = document.querySelector('[data-testid="select-filterPicante"]');      //Se obtienen referencias a los elementos del DOM que corresponden a los selectores (filtroPedido, filtroPicante, filtroAlfabetica, botonLimpiar) utilizando atributos data-testid para identificarlos fácilmente.
const filtroAlfabetica = document.querySelector('[data-testid="select-sort"]');
const botonLimpiar = document.querySelector('[data-testid="button-clear"]');

filtroPedido.addEventListener("change", (e) => {          //Cuando cambia el valor de filtroPedido (selector de tipo de plato), se obtiene el nuevo valor seleccionado (platoPrincipal).
  const platoPrincipal = e.target.value;                 //Se filtran los datos originales (data) utilizando filterData basado en el campo "mainField" y el valor seleccionado.
  filtrosPlato = filterData(data, "mainField", platoPrincipal);     
  rootH.innerHTML = "";     //Se limpia el contenido actual de rootH y se vuelve a renderizar (appendChild) los elementos filtrados utilizando renderItems.
  rootH.appendChild(renderItems(filtrosPlato));
});

filtroPicante.addEventListener("change", (e) => {
  const nivelPicante = e.target.value;
  const platosFiltrados = filterData(data, "nivelSpicy", nivelPicante);
  rootH.innerHTML = "";
  rootH.appendChild(renderItems(platosFiltrados));
});

filtroAlfabetica.addEventListener("change", (e) => {
  const orden = e.target.value;
  const platosOrdenados = sortData(filtrosPlato, "name", orden === "asc");
  rootH.innerHTML = "";
  rootH.appendChild(renderItems(platosOrdenados));
});

botonLimpiar.addEventListener("click", () => {
  rootH.innerHTML = "";
  rootH.appendChild(renderItems(data));
});

// src/main.js
import { computeAverageSpiciness, computeHottestDish, computeMildestDish, computeSpicinessLevels, computeCountAboveThreshold } from './dataFunctions.js';
import { updateResult } from './view.js';

// Datos de ejemplo, reemplaza esto con tus datos reales
const spicyDishes = [
  { name: 'Taco', spiciness: 5 },
  { name: 'Enchilada', spiciness: 7 },
  { name: 'Salsa', spiciness: 9 }
];

// Seleccionar elementos del DOM
const select = document.querySelector('#calculationType');
const button = document.querySelector('#calculateButton');

// Vincular eventos a los elementos del DOM
button.addEventListener('click', () => {
  const calculationType = select.value;
  let result;
  if (calculationType === 'averageSpiciness') {
    result = computeAverageSpiciness(spicyDishes);
  } else if (calculationType === 'hottestDish') {
    result = computeHottestDish(spicyDishes).name;
  } else if (calculationType === 'mildestDish') {
    result = computeMildestDish(spicyDishes).name;
  } else if (calculationType === 'spicinessLevels') {
    const levels = computeSpicinessLevels(spicyDishes);
    result = `Mild: ${levels.mild}, Medium: ${levels.medium}, Hot: ${levels.hot}`;
  }
  updateResult(result);
});