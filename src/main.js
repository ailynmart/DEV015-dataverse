import { filterData, sortData, computeStats} from './dataFunctions.js'; //H3-1.3 envez de filterData estaba example aqui y en datafuncion.js 
import { renderItems } from './view.js';
import data from './data/dataset.js';


const rootH = document.querySelector("#root");//busca en el DOM el elemento con el ID root
rootH.appendChild(renderItems(data)); //appendChild añade el resultado de renderItems(data) a rootH
let filtrosPlato = data;
//H3-1.1 emplea algún SELECTOR del DOM y CONTROLADOR de EVENTO para seleccionar y vincular un evento al elemento <select>
//tenemos 3 select(LO QUE ESTAMOS FILTRANDO) debemos tomar con el DOM CADA UNO y HACER su respectivo EVENTO
const filtroPedido = document.querySelector('[data-testid="select-filter"]');
const filtroPicante = document.querySelector('[data-testid="select-filterPicante"]');
const filtroAlfabetica  = document.querySelector('[data-testid="select-sort"]');
const botonLimpiar = document.querySelector('[data-testid="button-clear"]'); /// evente y seleccion para el botton
botonLimpiar.addEventListener('click'function(){
rootH.innerHTML= renderItems(data),
});
filtroPedido.addEventListener("change",(e) => { //CHANGE cada que cambia algo se activa,(E)evento, TARGET es el objeto al que se esta refiriendo el (E) EN ESTE CASO EL FITRO DE PEDIDO
  const platoPrincipal = e.target.value; //e.tarjet.value apunta al elemento que escucha el change, en este caso el valor seleccionado
  const platosVarios = data;
  filtrosPlato = filterData(platosVarios,"pedido", platoPrincipal);
  rootH.innerHTML= "";
  rootH.appendChild(renderItems(filtrosPlato));
 
  //console.log(filtroPedido(data));

});

filtroPicante.addEventListener("change",(e) => {
  const picanteChile = e.target.value;
  const nivelPicante = data ;
  filtrosPlato = filterData(nivelPicante,"picante",picanteChile);
  rootH.innerHTML = "";
  rootH.appendChild(renderItems(filtrosPlato));
  

});

filtroAlfabetica.addEventListener("change",(e) => {
  const sortAlfabe = e.target.value;
  const sortSelec = data;
  r



});


//HITO3.1-4 invoca la función filterData
///const filtramosData = filterData(data, filterBy, value);

console.log(filtroPicante, renderItems(data), data); //con este consol puedo ver el pedido xq se hizo su selector y evento bueno creo que llegue hacer segun en la consola
