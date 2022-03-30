'use strict';

let usersArr = [];
//const userTab = document.querySelector('.userTab');
//const massOnBoard = document.getElementById('massOnBoard');
const usersTable = document.getElementById('usersTable');
const userNameNew = document.getElementById('userNameNew');
const userAgeNew = document.getElementById('userAgeNew');

//Конструктор таблицы
function createTable(test, targetTable) {
  //Найти в доке что то с индексом
  let oldTable = document.getElementById('tableRemovableNew');
  // если таблица не пустая - почистим ее
  if (oldTable) {
    targetTable.removeChild(oldTable);
  }

  //Создать таблицу
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  table.appendChild(thead);
  table.appendChild(tbody);

  let rowOne = document.createElement('tr');
  let headingOne = document.createElement('th');
  let headingTwo = document.createElement('th');
  let headingTree = document.createElement('th');

  headingOne.innerHTML = 'User ID';
  headingTwo.innerHTML = 'User Name';
  headingTree.innerHTML = 'User Age';

  rowOne.appendChild(headingOne);
  rowOne.appendChild(headingTwo);
  rowOne.appendChild(headingTree);
  thead.appendChild(rowOne);

  let count = 0;
  for (let i = 0; i < test.length; i++) {
    count++;
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {

      let td = document.createElement('td');
      switch (j) {
        case 0:
          td.innerHTML = count;
          break;
        case 1:
          td.innerHTML = test[i].userNameNew;
          break;
        case 2:
          td.innerHTML = test[i].userAgeNew;
          break;
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  table.id = 'tableRemovableNew';
  targetTable.appendChild(table);
}
//Конструктор юзеров 
function UserNew(userNameNew, userAgeNew) {
  this.userNameNew = userNameNew;
  this.userAgeNew = userAgeNew;
}
// Функция добавления нового пользователя в массив
function createUser() {
  let isNotNull = userNameNew.value && Number(userAgeNew.value);
  // Если поля не пустые
  if (isNotNull) {
    //Создаем нового юзера
    let newUser = new UserNew(
      userNameNew.value,
      Number(userAgeNew.value)
    );
    usersArr.push(newUser);
    // Очищяем поля ввода
    userNameNew.value = '';
    userAgeNew.value = '';
    console.log(usersArr);


    createTable(usersArr, usersTable);

  } else {
    // Если не все поля заполнены - вызываем окно alert
    alert("Введите значения!");
  }

}
//Функция удаления юзера
function deleteUser() {
  if (usersArr.length) {
    usersArr.pop();
    createTable(usersArr, usersTable);
  } else {
    alert("Массив уже пуст!\nСначала добавьте значения");
  }

}