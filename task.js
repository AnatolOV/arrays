//Задача 1. Сравнить массивы
//Создайте функцию compareArrays(arr1, arr2), которая с помощью функции высшего порядка будет сравнивать значения двух массивов. Если массивы имеют одинаковые значения на одинаковых индексах, compareArrays должна выдавать true (иначе false). Используйте метод every для сравнения элементов одного массива с соответствующими элементами другого массива.
//??? не понял что должно быть в функции высшего порядка, в чем она должна помочь compareArrays(arr1, arr2) для сравнения массивов.
//Я сделал 2 варианта решения, но не уверен, что это то, что требуется...

//Задание 1 Вариант решения №1
function compareArrays(arr1, arr2) {
  let result;
  for (let i = 0; i < (arr1.length + arr2.length); i++) {
    a = arr1[i];
    b = arr2[i];

    if (a != b) {
      result = false;
      return result;
    } else {
      result = true;
    }
  }
  return result; // boolean
}


let arr1 = [22, 2, 222];
let arr2 = [22, 2, 222];

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

  // Ваш код
  positiveNumber = arr.filter(number => number > 0);
  numberThree = positiveNumber.filter(a => a % 3 === 0);
  resultArr = numberThree.map(a => a * 10);

  return resultArr; // array
}
