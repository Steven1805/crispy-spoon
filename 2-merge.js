function merge(array1, array2) {
  let mergedArray = []; //1
  let i = 0; //1
  let j = 0; //1
  while (i < array1.length && j < array2.length) { //7
    if (array1[i] < array2[j]) { //3
      mergedArray.push(array1[i]); //3
      i++; //1
    } else {
      mergedArray.push(array2[j]); //3
      j++; //1
    }
  }
  while (i < array1.length) { //3
    mergedArray.push(array1[i]); //3
    i++; //1
  }
  while (j < array2.length) { //3
    mergedArray.push(array2[j]); //3
    j++; //1
  }
  return mergedArray; //1
}

module.exports = { merge };
// 1+1+1+7+3+3+1+3+1+3+3+1+3+3+1+1 = 36 = O(36) = O(1)
//Complexité constante
