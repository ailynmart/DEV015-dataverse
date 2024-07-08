export const renderItems = (data) => {
  // Verifica si los datos proporcionados son un array
  if (!Array.isArray(data)) {
    console.error('Los datos proporcionados no son un array');
    return null;  // Retorna null si los datos no son un array válido
  }
  // Crea un elemento <ul> para contener la lista de elementos
  const ul = document.createElement('ul');
  // Itera sobre cada elemento en el array de datos
  data.forEach(item => {
    // Crea un elemento <li> para cada elemento del array
    const li = document.createElement('li');
    // Agrega contenido HTML al <li> para mostrar información del item
    li.innerHTML += `Nombre: ${item.name || 'Sin nombre'}<br>`;  // || para proporcionar un valor predeterminado en caso de que alguna propiedad
    li.innerHTML += `Descripción corta: ${item.shortDescription || 'Sin descripción corta'}<br>`; // <br>: Es una etiqueta HTML que indica un salto de línea dentro de un elemento <li>. Esto hace que el siguiente contenido se muestre en una nueva línea dentro de la lista.
    li.innerHTML += `Descripción: ${item.description || 'Sin descripción'}<br>`; //La expresión ${} en JavaScript se conoce como "template literal" o "plantilla de cadena de texto". 
    li.innerHTML += `<img src="${item.imageUrl || ''}" alt="${item.name || 'Imagen sin nombre'}"><br>`;
    li.innerHTML += `Nivel de picante: ${item.facts.nivelSpicy || 'Sin nivel de picante'}<br>`;
    li.innerHTML += `Lugar de origen: ${item.facts.placeOrigen || 'Sin lugar de origen'}<br>`;
    li.innerHTML += `Tipo de carne: ${item.facts.typeOfMeat || 'Sin tipo de carne'}<br>`;
    li.innerHTML += `Categoría: ${item.facts.mainField || 'Sin categoría'}<br>`;
    // Agrega el elemento <li> al elemento <ul>
    ul.appendChild(li); //ul.appendChild(li); en JavaScript se utiliza para agregar un elemento hijo (li en este caso) al final de un elemento padre (ul en este caso)
  });
  // Retorna el elemento <ul> con todos los elementos <li> creados
  return ul;
};

// src/view.js
export function updateResult(result) {
  document.querySelector('#result').textContent = result;
}

// Aquí podrías agregar funciones adicionales para manejar otras actualizaciones de la interfaz.




