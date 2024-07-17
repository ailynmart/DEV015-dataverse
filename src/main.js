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

//son funciones importadas desde dataFunctions.js. Estas funciones realizan diversos cálculos sobre los datos de platos picantes.
import { computeAverageSpiciness, computeHottestDish, computeMildestDish, computeSpicinessLevels} from './dataFunctions.js';
//es una función importada desde view.js, la cual actualiza la interfaz de usuario con los resultados de los cálculos.
import { updateResult } from './view.js';

// Datos de ejemplo, reemplaza esto con tus datos reales
//spicyDishes es un arreglo que contiene objetos, cada uno representando un platillo con su nombre y nivel de picante (spiciness).
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

// Seleccionar elementos del DOM

const select = document.querySelector('#calculationType'); //selecciona el menú desplegable (con id calculationType) que permite al usuario elegir el tipo de cálculo que desea realizar.
const button = document.querySelector('#calculateButton'); //selecciona el botón (con id calculateButton) que, al hacer clic, desencadenará el cálculo.

// Vincular eventos a los elementos del DOM
button.addEventListener('click', () => {  //Aquí se añade un event listener al botón que escucha por un clic y ejecuta la función provista cuando se hace clic.
  const calculationType = select.value; //obtiene el valor seleccionado en el menú desplegable.
  let result; // declara una variable result que almacenara el resultado del calculo. 
  if (calculationType === 'averageSpiciness') { //Dependiendo del valor de calculationtype se ejecuta la siguiente funcion para calcular el resultado
    result = computeAverageSpiciness(spicyDishes); //   Si calculationType es 'averageSpiciness', se llama a computeAverageSpiciness(spicyDishes) y se almacena el resultado en result.
  } else if (calculationType === 'hottestDish') { //Si calculationType es 'hottestDish', se llama a computeHottestDish(spicyDishes).name para obtener el nombre del platillo más picante.
    result = computeHottestDish(spicyDishes).name; //Si calculationType es 'mildestDish', se llama a computeMildestDish(spicyDishes).name para obtener el nombre del platillo menos picante.
  } else if (calculationType === 'mildestDish') {  // Si calculationType es 'spicinessLevels', se llama a computeSpicinessLevels(spicyDishes) y se construye una cadena con los niveles de picante.
    result = computeMildestDish(spicyDishes).name;  
  } else if (calculationType === 'spicinessLevels') {
    const levels = computeSpicinessLevels(spicyDishes);
    result = `Picante: ${levels.mild}, Medio Picante: ${levels.medium}, Muy Picante: ${levels.hot}`; 
  }
  updateResult(result); //Finalmente, updateResult(result); se llama para actualizar la interfaz de usuario con el resultado del cálculo.
});

