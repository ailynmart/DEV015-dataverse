import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('filterData', () => {

  it('debera retornar los platos  que cumplan el filtro postres', () => {
    const tipodePlato = filterData(fakeData,"Postres");
    expect(tipodePlato.length).toBe(2);
  });
});

describe('sortData', () => {

  it('debera ordenar los platos de forma asc por nombre', () => {
    const ordenAscen = sortData(fakeData,'name', 'asc')
    expect(ordenAscen[0].name).toBe('Micheladas');
  });
  it("debera ordenar los platos de forma desc por nombre", () => {
    const ordenDesc = sortData(fakeData, "name", "desc");
    expect(ordenDesc).toEqual([...fakeData].sort((a, b) => b.name.localeCompare(a.name)));
  });
});

console.log(sortData);
//segun el README En este archivo tendrás hacer pruebas unitarias de 
//las funciones implementadas en el archivo dataFunctions.js. (filterBy, sortBy, etc.)