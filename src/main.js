import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// Selección del elemento #root
const rootH = document.querySelector("#root");

// Renderizado inicial de los datos
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


