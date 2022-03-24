'use strict';
let newArray = [1, 2, 3, 4, 5, 6, 7, 8];
let tempArray = [];
const lengthValue = document.getElementById('lengthValue');
const massOnBoard = document.getElementById('massOnBoard');
const addItem = document.getElementById('addItem');
const pushUnshiftValue = document.getElementById('push_unshift_Value');
const concatValue = document.getElementById('concatValue');
const searchValue = document.getElementById('searchValue');


// Функция реализует вывод массива на экран
function printMass(anyArray, targTable) {
  // это позволит "почистить" наш html от старой таблицы
  let oldTable = document.getElementById('tableRemovable');
  // если таблица не пустая - почистим ее
  if (oldTable) {
    targTable.removeChild(oldTable);
  }

  // Создать элемент таблица
  let tableRes = document.createElement('table');
  // Строка индекса
  let rawIndex = document.createElement('tr');
  // Строка значений
  let rawValue = document.createElement('tr');
  // Ячейка заголовок
  let index = document.createElement('th');
  // Присвоим значение ячейки заголовка
  index.innerText = 'Index';
  // Ячейка значений
  let valueTd = document.createElement('td');
  // Присвоение значения ячейке значений
  valueTd.innerText = 'Value';
  // Добавить к строкам новые ячейки
  rawIndex.appendChild(index);
  rawValue.appendChild(valueTd);

  // Цикл, который пройдется по массиву и отрисует его значения
  for (let key_elem in anyArray) {
    // умышленно используем in
    // чтобы использовать реальные индексы элементов массива
    // Ячейка заголовок
    let index = document.createElement('th');
    index.innerText = key_elem;
    // Ячейка значений
    let valueTd = document.createElement('td');
    valueTd.innerText = anyArray[key_elem];
    // Добавить к строкам новые ячейки
    rawIndex.appendChild(index);
    rawValue.appendChild(valueTd);
  }

  // Записываем в теблицу строки со значениями
  tableRes.appendChild(rawIndex);
  tableRes.appendChild(rawValue);
  // Добавим id таблицы
  tableRes.id = 'tableRemovable';
  // Запишем таблицу на свое место
  targTable.appendChild(tableRes);
}
// POP Удаляет последний элемент из массива и возвращает его значение
function popMass() {
  // чтобы проверить, что массив не пустой
  // мы получаем его длину
  // если длина 0 - выражение будет приведено к false
  if (newArray.length) {
    // используем метод массива
    let result = newArray.pop();
    // записываем результат в html документ
    pop_shift_Value.innerHTML = ' - ' + result;
    // вызов функции вывода массива
    printMass(newArray, massOnBoard);
  } else {
    alert("Массив уже пуст!\nСначала добавьте значения");
  }
}
// SHIFT Удаляет первый элемент из массива
function shiftMass() {
  if (newArray.length) {
    let result = newArray.shift();
    pop_shift_Value.innerHTML = ' - ' + result;
    printMass(newArray, massOnBoard);
  } else {
    alert("Массив уже пуст!\nСначала добавьте значения");
  }

}
// UNSHIFT Добавляет неограниченное количество новых элементов в начало массива.
function unshiftMass() {
  if (pushUnshiftValue) {
    let temp = pushUnshiftValue.value;
    newArray.unshift(temp);
    printMass(newArray, massOnBoard);
  }
}
//PUSH Добавляет в конец массива
function pushMass() {
  if (pushUnshiftValue) {
    let temp = pushUnshiftValue.value;
    newArray.push(temp);
    printMass(newArray, massOnBoard);
  }
}
// CONCAT Объединение двух массивов
function concatMass() {
  if (concatValue) {
    let str = (concatValue.value);
    tempArray = str.split(',');
    console.log(concatValue.value);
    console.log(tempArray);
    newArray = newArray.concat(tempArray);
    printMass(newArray, massOnBoard);
  }
}
// Длинна массива
function lengthMass() {
  lengthValue.innerHTML = ' = ' + newArray.length;
}
// Поиск по индексу
function searchMass() {
  if (searchValue) {
    let temp = searchValue.value;
    let result = newArray.indexOf(temp);
    console.log(temp);
    console.log(result);
    if (result < 0) {
      result = 'Элемент не найден';
    }
    resIndex.innerHTML = ' :' + result;
  }
}



document.addEventListener("DOMContentLoaded", function () {
  printMass(newArray, massOnBoard);
});