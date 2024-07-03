export const renderItems = (data) => {
  if (!Array.isArray(data)) {
    console.error('Los datos proporcionados no son un array');
    return null;
  }

  const ul = document.createElement('ul');

  data.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML += `Nombre: ${item.name || 'Sin nombre'}<br>`;
    li.innerHTML += `Descripción corta: ${item.shortDescription || 'Sin descripción corta'}<br>`;
    li.innerHTML += `Descripción: ${item.description || 'Sin descripción'}<br>`;
    li.innerHTML += `<img src="${item.imageUrl || ''}" alt="${item.name || 'Imagen sin nombre'}"><br>`;
    li.innerHTML += `Nivel de picante: ${item.facts.nivelSpicy || 'Sin nivel de picante'}<br>`;
    li.innerHTML += `Lugar de origen: ${item.facts.placeOrigen || 'Sin lugar de origen'}<br>`;
    li.innerHTML += `Tipo de carne: ${item.facts.typeOfMeat || 'Sin tipo de carne'}<br>`;
    li.innerHTML += `Categoría: ${item.facts.mainField || 'Sin categoría'}<br>`;
    ul.appendChild(li);
  });

  return ul;
};




