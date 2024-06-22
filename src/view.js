export const renderItems = (data) => {
// Aquí comienza tu código y puedes retornar lo que tu necesites
  // creando ul
  const crearUl = document.createElement("ul");

  //cramos un for each----parece que dentro debemos crear cada li(24?)
  data.forEach(item => { //ITEM ()representa cada iteracion-funcion del arreglo
    const crearLi = document.createElement("li");// creamos un li
    crearLi.textConten = item; /// al li con el texxtcontet le meto la data representada por item
    crearUl.appendChild(crearLi);
    
    const creoDl = document.createElement("dl");
    crearLi.appendChild(creoDl);
    creoDl.setAttribute("itemscope","");
    creoDl.setAttribute("itemtype","ComidaPicanteMexico");

    const paraImg = document.createElement("img");
    creoDl.appendChild(paraImg);
    paraImg.src = item.imageUrl; // va imgUrl o img asumo que la imgUrl bota la imagen y no solo la url jijij
    paraImg.alt = item.name;  // para cuando pasemos por la imagen salga el nombre o cuando demore en cargar

    const nameDt = document.createElement("dt");
    creoDl.appendChild(nameDt);
    nameDt.textContent ="Nombre";
    const nameDd =document.createElement("dd");
    creoDl.appendChild(nameDd);
    nameDd.setAttribute("itemprop","name");
    nameDd.textContent = item.name;

    const shorDescriDt = document.createElement("dt");
    creoDl.appendChild(shorDescriDt);
    shorDescriDt.textContent ="Descripcion corta";
    const shorDescriDd = document.createElement("dd");
    creoDl.appendChild(shorDescriDd);
    shorDescriDd.setAttribute("itemprop","shortDescription");
    shorDescriDd.textContent = item.shortDescription;

    const descriDt = document.createElement("dt");
    creoDl.appendChild(descriDt);
    shorDescriDt.textContent ="Descripcion ";
    const descriDd = document.createElement("dd");
    creoDl.appendChild(descriDd);
    shorDescriDd.setAttribute("itemprop","Description");
    shorDescriDd.textContent = item.shortDescription;

    








   


    
    
    console.log(crearUl);



  });



  
  



  console.log(data);

  return 'example';
};

