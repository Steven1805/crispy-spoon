function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) { //5
    if (array[i] === number) { //3 entre les lignes 3 et 5 : n
      return true; //1
    }
  }
  return false; //1
}

module.exports = { arrayContain };

//5 + 3 + n + 1 = 9 + n donc O(9 + n) = O(n)
//complexité linéaire 
