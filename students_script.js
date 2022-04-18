// Тут объяелен массив и его можно и нужно будет менять
let baseMass = ['Вася', 'Петя', 'Коля', 'Женя'];
// Это массив пользователей
let usersMass = [];
//Функция-конструктор, которая позволит создавать объекты User
function User(nameUser, patronymicUser, surnameUser, loginUser, ageUser, growthUser) {
  this.nameUser = nameUser;
  this.patronymicUser = patronymicUser;
  this.surnameUser = surnameUser;
  this.loginUser = loginUser;
  this.ageUser = ageUser;
  this.growthUser = growthUser;
}

function addUser() {
  //если хотябы одно поле пустое в isNotNull запишется пустое значение
  let isNotNull = names.value && secName.value && lastName.value &&
    login.value && Number(age.value) && Number(userHeight.value);
  // проверяем что нет ни одного пустого поля инпут
  if (isNotNull) {
    // создаем объект типа User
    let newUser = new User(
      names.value,
      secName.value,
      lastName.value,
      login.value,
      age.value,
      userHeight.value
    );
    // будем использовать id объекта из массива
    let id = usersMass.length;
    // добавляем новый элемент в массив
    let result = usersMass.push(newUser);
    // создаем дочерний элемент селектора -- строка выпадающего списка
    let opt = document.createElement("option");
    // value позволит в дальнейшем идентифицировать выбранный элемент селектора
    // в данном длучае будет соответсвовать индексу в массиве
    opt.value = String(id);
    // текст - то что увидит пользователь в выпадающем списке
    opt.text = newUser.nameUser;
    // теперь к элементу документа мы добавили новый дочерний элемент
    selectUser.appendChild(opt);

    massOfUser.innerHTML = "  " + result;
    printUserMass(usersMass, massOfUser);
    // сотрем ненужный текст в input-ах в случае успеха
    names.value = '';
    secName.value = '';
    lastName.value = '';
    login.value = '';
    age.value = '';
    userHeight.value = '';
  } else {
    // если не все поля заполнены - вызываем окно alert
    alert("Введите значения!")
  }
}

function midleHeight() {
  let storage = 0;
  let countUsers = usersMass.length;

  if (countUsers > 0) {
    for (userUnit of usersMass) {
      storage = storage + Number(userUnit.growthUser);
    }

    let result = storage / countUsers;
    userResult.innerHTML = result;
  } else {
    alert('Нет ни одного пользователя!');
  }
}

function midleAge() {
  let storage = 0;
  let countUsers = usersMass.length;
  if (countUsers > 0) {
    for (userUnit of usersMass) {
      storage = storage + Number(userUnit.ageUser);
    }

    let result = storage / countUsers;
    userResult.innerHTML = result;
  } else {
    alert('Нет ни одного пользователя!');
  }
}

function countUsers() {
  userResult.innerHTML = usersMass.length;
}

function myFunc() {
 let color = document.querySelector('#massOfUser')
 color.style.background = "#f43";
}

// Функция реализует вывод массива на экран
// anyArray - массив с данными которые будем отображать
// targTable - элемент HTML в котором мы разместим нашу таблицу
function printMass(anyArray, targTable) {
  // это позволит "почистить" наш html от старой таблицы
  let oldTable = document.getElementById('tableRemovable');
  // если таблица не пустая - почистим ее
  if (oldTable) {
    targTable.removeChild(oldTable);
  }

  // Создать элемент таблица
  let tableRes = document.createElement('table')
  // Строка индекса
  let rawIndex = document.createElement('tr')
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

// Ваш код тут
function printUserMass(anyArray, targTable) {
  // это позволит "почистить" наш html от старой таблицы
  let oldTable = document.getElementById('tableRemovableUsers');
  // если таблица не пустая - почистим ее
  if (oldTable) {
    targTable.removeChild(oldTable);
  }

  // Создать элемент таблица
  let tableRes = document.createElement('table')
  // Строка индекса
  let rawIndex = document.createElement('tr')
  // Строка значений
  let rawValue = document.createElement('tr');
  // Ячейка заголовок
  let index = document.createElement('th');
  // Присвоим значение ячейки заголовка
  index.innerText = 'Номер';
  // Ячейка значений
  let valueTd = document.createElement('td');
  // Присвоение значения ячейке значений
  valueTd.innerText = 'Имя';
  // Добавить к строкам новые ячейки
  rawIndex.appendChild(index);
  rawValue.appendChild(valueTd);

  // Цикл, который пройдется по массиву и отрисует его значения
  for (let i = 0; i < usersMass.length; i++) {

    let index = document.createElement('th');
    index.innerText = i;

    let valueTd = document.createElement('td');
    valueTd.innerText = anyArray[i].nameUser;

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

function popMass() {
  //проверяем длину массива (чтоб не пустой)
  if (baseMass.length) {
    // используем метод массива
    let result = baseMass.pop();
    // записываем результат в html документ
    pop_shift_Value.innerHTML = '- ' + result;
    // вызов функции вывода массива
    printMass(baseMass, massOnBoard);
  } else {
    alert("Массив уже пуст!\nСначала добавьте значения");
  }
}

function shiftMass() {
  if (baseMass.length) {
    let result = baseMass.shift();
    pop_shift_Value.innerHTML = '- ' + result;
    printMass(baseMass, massOnBoard);
  } else {
    alert("Массив уже пуст!");
  }
}

function pushMass() {
  let pushVal = push_unshift_Value.value;
  if (pushVal) {
    let result = baseMass.push(pushVal);
    push_unshift_Value.innerHTML = '- ' + result;
    printMass(baseMass, massOnBoard);
  } else {
    alert("Введите значение!");
  }
}

function unshiftMass() {
  let shiftVal = push_unshift_Value.value;
  if (shiftVal) {
    let result = baseMass.unshift(shiftVal);
    push_unshift_Value.innerHTML = '- ' + result;
    printMass(baseMass, massOnBoard);
  } else {
    alert("Введите значение!");
  }
}

function lengthMass() {
  let result = baseMass.length
  lengthValue.innerHTML = " - " + result;
}

function concatMass() {
  let new_mass = concatValue.value.split(',');
  if (concatValue) {
    baseMass = baseMass.concat(new_mass);
    printMass(baseMass, massOnBoard);
  } else {
    alert("Поле пустое!");
  }
}

function searchMass() {
  let newValue = searchValue.value;
  if (newValue) {
    let result = baseMass.indexOf(newValue);
    resIndex.innerHTML = '- ' + result;
    printMass(baseMass, massOnBoard);
  } else {
    alert("Поле пустое!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  printMass(baseMass, massOnBoard);
});

document.addEventListener("DOMContentLoaded", function () {
  printUserMass(usersMass, massOfUser);
});