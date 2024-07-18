export const renderItems = (data) => {
  
  if (!Array.isArray(data)) {
    console.error('Los datos proporcionados no son un array');
    return null; 
    return null; 
  }

  
  const itemsHTML = data.map(item => {
   
    const li = document.createElement('li');
    li.setAttribute('itemtype','food')
    li.setAttribute('itemscope',true)
 
    li.innerHTML = `
      <div>
        <p>Nombre: ${item.name || 'Sin nombre'}</p>
        <p>Descripción corta: ${item.shortDescription || 'Sin descripción corta'}</p>
        <p>Descripción: ${item.description || 'Sin descripción'}</p>
        <img src="${item.imageUrl || ''}" alt="${item.name || 'Imagen sin nombre'}">
        <p>Nivel de picante: ${item.facts.nivelSpicy || 'Sin nivel de picante'}</p>
        <p>Lugar de origen: ${item.facts.placeOrigen || 'Sin lugar de origen'}</p>
        <p>Tipo de carne: ${item.facts.typeOfMeat || 'Sin tipo de carne'}</p>
        <p>Categoría: ${item.facts.mainField || 'Sin categoría'}</p>
      </div>
    `;
    

    return li;
  });

 
  const ul = document.createElement('ul');
 
 
  itemsHTML.forEach(item => ul.appendChild(item));

  
  
  return ul;
};


export function updateResult(result) {
  document.querySelector('#result').textContent = result;
}


