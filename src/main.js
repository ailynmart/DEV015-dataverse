import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';


const rootH = document.querySelector("#root");   

rootH.appendChild(renderItems(data));  
let filtrosPlato = data;

// Controladores de eventos para los selectores
const filtroPedido = document.querySelector('[data-testid="select-filter"]');    
const filtroPicante = document.querySelector('[data-testid="select-filterPicante"]');      
const filtroAlfabetica = document.querySelector('[data-testid="select-sort"]');
const botonLimpiar = document.querySelector('[data-testid="button-clear"]');

filtroPedido.addEventListener("change", (e) => {          
  const platoPrincipal = e.target.value;                 
  filtrosPlato = filterData(data, "mainField", platoPrincipal);     
  rootH.innerHTML = "";    
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


import { computeAverageSpiciness, computeHottestDish, computeMildestDish, computeSpicinessLevels} from './dataFunctions.js';

import { updateResult } from './view.js';


const spicyDishes = [
  { name: 'Aguachile Verde', spiciness: 8 },
  { name: 'Mole Negro', spiciness: 6 },
  { name: 'Chiles en Nogada', spiciness: 4 },
  { name: 'Birria de Res', spiciness: 5 },
  { name: 'Cochinita Pibil', spiciness: 6 },
  { name: 'Tacos al pastor', spiciness: 3 },
  { name: 'Tacos de cochinita pibil', spiciness: 6},
  { name: 'Coctel de camarón', spiciness: 4 },
  { name: 'Ceviche', spiciness: 3},
  { name: 'Tamal oaxaqueño', spiciness: 5 },
  { name: 'Pozole Rojo', spiciness: 7 },
  { name: 'Caldo Tlalpeño', spiciness: 7 },
  { name: 'Menudo', spiciness: 8 },
  { name: 'Tostada de Tinga', spiciness: 7 },
  { name: 'Sopes', spiciness: 4 },
  { name: 'Tlacoyos con Salsa de Chile Morita', spiciness: 8 },
  { name: 'Tostadas de camarón', spiciness: 4 },
  { name: 'Salsa Roja', spiciness: 9 },
  { name: 'Salsa verde', spiciness: 9 },
  { name: 'Guacamole', spiciness: 7 },
  { name: 'Pico de gallo', spiciness:89 },
  { name: 'Chocolate con chile', spiciness: 7 },
  { name: 'Frutas con chile', spiciness: 8 },
  { name: 'Micheladas', spiciness: 9 }
 
];



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
    result = `Picante: ${levels.mild}, Medio Picante: ${levels.medium}, Muy Picante: ${levels.hot}`; 
  }
  updateResult(result); 
});

