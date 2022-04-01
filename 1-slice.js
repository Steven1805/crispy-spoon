function slice(array, start, end) { 
  let slicedArray = []; //1
  for (let i = start; i < end; i++) { //6
    slicedArray.push(array[i]); //3 lignes 4 à 5 : 3n
  }
  return slicedArray; //1
}

module.exports = { slice };

//1 + 6 + 3n  + 1  = 8 + 3n donc O(8 + 3n) = O(n)
//Complexité linéaire
