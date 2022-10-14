//Задача 1. Сравнить массивы
function compareArrays(arr1, arr2) {
  let result;
  result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

  return result; // boolean
}

//Задание 2
function advancedFilter(arr) {
  let resultArr;

 // resultArr = arr.filter(number => number > 0).filter(a => a % 3 === 0).map(a => a * 10);
 // return resultArr; // array

  return arr.filter(number => number > 0).filter(a => a % 3 === 0).map(a => a * 10);
}

