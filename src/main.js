import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
const rootH = document.getElementById("root");
rootH.appendChild(renderItems(data));
console.log(example, renderItems(data), data);
