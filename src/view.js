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
    creoDl.setAttribute("itemscope","");// con el setaaatribute se ESTABLECE el ATRIBUTO DEL itemscop
    creoDl.setAttribute("itemtype","ComidaPicanteMexico");

    const paraImg = document.createElement("img");
    creoDl.appendChild(paraImg);
    paraImg.src = item.imageUrl; // va imgUrl o img asumo que la imgUrl bota la imagen y no solo la url jijij
    paraImg.alt = item.name;  // para cuando pasemos por la imagen salga el nombre o cuando demore en cargar

    const nameDt = document.createElement("dt");
    creoDl.appendChild(nameDt);
    nameDt.textContent ="Nombre"; //con textcontet ESTABLECEMOS el TEXTO de DT
    const nameDd =document.createElement("dd");
    creoDl.appendChild(nameDd);
    nameDd.setAttribute("itemprop","name");
    nameDd.textContent = item.name;//Establece el CONTENIDO de DD con TEXTCONTET

    const shorDescriDt = document.createElement("dt");
    creoDl.appendChild(shorDescriDt);
    shorDescriDt.textContent ="Descripcion corta";
    const shorDescriDd = document.createElement("dd");
    creoDl.appendChild(shorDescriDd);
    shorDescriDd.setAttribute("itemprop","shortDescription");
    shorDescriDd.textContent = item.shortDescription;

    const descriDt = document.createElement("dt");
    creoDl.appendChild(descriDt);
    descriDt.textContent ="Descripcion ";
    const descriDd = document.createElement("dd");
    creoDl.appendChild(descriDd);
    descriDd.setAttribute("itemprop","description");
    descriDd.textContent = item.description;

    const placeOrigenDt = document.createElement("dt");
    creoDl.appendChild(placeOrigenDt);
    placeOrigenDt.textContent= "Lugar de origen";
    const placeOrigenDd = document.createElement("dd");
    creoDl.appendChild(placeOrigenDd);
    placeOrigenDd.setAttribute("itemprop","placeOrigen");
    placeOrigenDd.textContent = item.facts.placeOrigen;
    
    const picanteDt = document.createElement("dt");
    creoDl.appendChild(picanteDt);
    picanteDt.textContent = "Nivel de Picante";
    const picanteDd = document.createElement("dd");
    creoDl.appendChild(picanteDd);
    picanteDd.setAttribute("itemprop","nivelSpicy");
    picanteDd.textContent = item.facts.nivelSpicy;

    const tipoCarneDt = document.createElement("dt");
    creoDl.appendChild(tipoCarneDt);
    tipoCarneDt.textContent="Tipo de Carne";
    const tipoCarneDd = document.createElement("dd");
    creoDl.appendChild(tipoCarneDd);
    tipoCarneDd.setAttribute("itemprop","typeOfMeat");
    tipoCarneDd.textContent = item.facts.typeOfMeat;

    const fieldDt = document.createElement("dt");
    creoDl.appendChild(fieldDt);
    fieldDt.textContent = "Tipo de Pedido";
    const fieldDd = document.createElement("dd");
    creoDl.appendChild(fieldDd);
    fieldDd.setAttribute ("itemprop","mainField"); //cambiar mainfiel pot typeOfOrder
    fieldDd.textContent = item.facts.mainField;

    //document.body.appendChild(crearUl);

   


  });

  return crearUl;
};