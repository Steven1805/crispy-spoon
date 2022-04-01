const { slice } = require('./1-slice');
const { merge }= require('./2-merge');
const { generateUnorderedArray } = require('./4-generate-unordered-array');

function sort(array) {
  if (array.length <= 1) { //2
    return array; //1
  }
  const middle = Math.floor(array.length / 2); //4
  const left = slice(array, 0, middle); // n
  const right = slice(array, middle, array.length); //n
  return merge(sort(left), sort(right)); //5
}

const array = generateUnorderedArray(10); //2
console.log(array); //2
console.log(sort(array)); //3
//2 + 1 + 4 + n + n + 5 + 2 + 2 + 3 = 19 + 2n = O(19 + 2n)  = O(n)
//complexité linéaire
