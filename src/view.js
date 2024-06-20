export const renderItems = (data) => {
// Aquí comienza tu código y puedes retornar lo que tu necesites
  // creando ul
  const crearUl = document.createElement("ul")

  //cramos un for each----parece que dentro debemos crear cada li(24?)
  data.forEach(item => { //ITEM representa cada iteracion-funcion del arreglo
    const crearLi = document.createElement("li")// creamos un li
    crearLi.textConten = item;
    crearUl.appendChild(crearLi)
    console.log(item);



  });



  
  



  console.log(data)

  return 'example';
};

