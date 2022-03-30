'use strict';

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

function printUsers() {
  // чтобы проверить, что массив не пустой
  // мы получаем его длину
  // если длина 0 - выражение будет приведено к false
  if (newArray.length) {
    printMass(newArray, massOnBoard);
  } else {
    alert("Массив уже пуст!\nСначала добавьте значения");
  }
}

function newPrint(anyArray, targTable) {
  let oldTable = document.getElementById('tableRemovableUsers');
  if (oldTable) {
    targTable.removeChild(oldTable);
  }

  let tableRes = document.createElement('table');
  let rawIndex = document.createElement('tr');
  let rawValue = document.createElement('tr');
  let index = document.createElement('th');
  index.innerText = 'Index';
  let valueTd = document.createElement('td');
  valueTd.innerText = 'Value';
  rawIndex.appendChild(index);
  rawValue.appendChild(valueTd);

  for (let i = 0; i < usersMass.length; i++) {
    let index = document.createElement('th');
    index.innerText = i;

    let valueTd = document.createElement('td');
    valueTd.innerText = anyArray[i].loginUser;

    rawIndex.appendChild(index);
    rawValue.appendChild(valueTd);
  }

  // Записываем в теблицу строки со значениями
  tableRes.appendChild(rawIndex);
  tableRes.appendChild(rawValue);
  // Добавим id таблицы
  tableRes.id = 'tableRemovableUsers';
  // Запишем таблицу на свое место
  targTable.appendChild(tableRes);
}