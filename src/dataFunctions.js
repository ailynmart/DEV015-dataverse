// Filtra los datos según una propiedad y un valor específicos
export const filterData = (data, property, value) => {    
  return data.filter(item => item.facts[property] && item.facts[property].toLowerCase() === value.toLowerCase());   
};   


export const sortData = (data, property, ascending = true) => {         
  return data.sort((a, b) => {
    if (a[property] < b[property]) return ascending ? -1 : 1;
    if (a[property] > b[property]) return ascending ? 1 : -1;
    return 0;
  });
};


export function computeAverageSpiciness(data) {   
  const totalSpiciness = data.reduce((sum, item) => sum + item.spiciness, 0);     
  const averageSpiciness = totalSpiciness / data.length;
  return averageSpiciness.toFixed(2);                                            
} 
export function computeHottestDish(data) {
  return data.reduce((hottest, item) => (item.spiciness > hottest.spiciness ? item : hottest), data[0]); 

}

export function computeMildestDish(data) {   
  return data.reduce((mildest, item) => (item.spiciness < mildest.spiciness ? item : mildest), data[0]); 
}


export function computeSpicinessLevels(data) { 
  return data.reduce((levels, item) => {  
    if (item.spiciness < 3) levels.mild++;  
    else if (item.spiciness < 7) levels.medium++;  
    else levels.hot++;   
    return levels;          
  }, { mild: 0, medium: 0, hot: 0 });
}




