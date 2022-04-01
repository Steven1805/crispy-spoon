const { arrayContain } = require('./3-array-contain');

function generateUnorderedArray(size) {
  let array = []; //1
  for (let i = 0; i < size; i++) { //5
    let number = Math.floor(Math.random() * 100); //5 lignes 6 à 11 : 11n
    while (arrayContain(array, number)) { //3
      number = Math.floor(Math.random() * 100); //5
    }
    array.push(number); //3
  }
  return array; //1
}

module.exports = { generateUnorderedArray };

// 1 + 5 + 11n + 1 = 7 + 11n = O(7 + 11n) = O(n)
//complexité linéaire
