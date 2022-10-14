//Задача 1. Сравнить массивы
function compareArrays(arr1, arr2) {
  let result;
  result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

  return result; // boolean
}

//Задание 1 Вариант решения №2
function compareArrays(arr1, arr2) {
  let result;
  for (let i = 0; i < (arr1.length + arr2.length); i++) {
    let a = arr1[i];
    let b = arr2[i];
    if (arr1.every((elem) => a != b)) {
      result = false;
      return result;
    } else {
      result = true;
    }
  }
  return result; // boolean
}
console.log(compareArrays(arr1, arr2));

//Задание 2
function advancedFilter(arr) {
  let resultArr;

 // resultArr = arr.filter(number => number > 0).filter(a => a % 3 === 0).map(a => a * 10);
 // return resultArr; // array

  return arr.filter(number => number > 0).filter(a => a % 3 === 0).map(a => a * 10);
}

