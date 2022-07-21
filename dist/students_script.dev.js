"use strict";

/// init

/* Читайте комментарии и допишите код где необходимо */
// Тут объяелен массив и его можно и нужно будет менять
var baseMass = ['Вася', 'Петя', 'Коля', 'Женя']; // Это массив пользователей, работайте с ним
// для выполнения последнего задания

var usersMass = []; // Напишите функцию-конструктор
// которая позволит создавать объекты User

function User(name, surname, lastname, login, age, height) {
  /**
   * Ваш код тут
   *
  this.name = name;
  this...
  ...
   this.login = login;
   ...
  *
   */
  this.name = name;
  this.surname = surname;
  this.lastname = lastname;
  this.login = login;
  this.age = age;
  this.height = height;
} // Функция реализует вывод массива на экран
// Если вы изменили массив - вызовите эту функцию чтобы отобразить актальные значения

/**
 *
 * @param anyArray - массив с данными которые будем отображать
 * @param targTable - элемент HTML в котором мы разместим нашу таблицу
 */


function printMass(anyArray, targTable) {
  // это позволит "почистить" наш html от старой таблицы
  var oldTable = document.getElementById('tableRemovable'); // если таблица не пустая - почистим ее

  if (oldTable) {
    targTable.removeChild(oldTable);
  } // Создать элемент таблица


  var tableRes = document.createElement('table'); // Строка индекса

  var rawIndex = document.createElement('tr'); // Строка значений

  var rawValue = document.createElement('tr'); // Ячейка заголовок

  var index = document.createElement('th'); // Присвоим значение ячейки заголовка

  index.innerText = 'Index'; // Ячейка значений

  var valueTd = document.createElement('td'); // Присвоение значения ячейке значений

  valueTd.innerText = 'Value'; // Добавить к строкам новые ячейки

  rawIndex.appendChild(index);
  rawValue.appendChild(valueTd); // Цикл, который пройдется по массиву и отрисует его значения

  for (var key_elem in anyArray) {
    // умышленно используем in
    // чтобы использовать реальные индексы элементов массива
    // Ячейка заголовок
    var _index = document.createElement('th');

    _index.innerText = key_elem; // Ячейка значений

    var _valueTd = document.createElement('td');

    _valueTd.innerText = anyArray[key_elem]; // Добавить к строкам новые ячейки

    rawIndex.appendChild(_index);
    rawValue.appendChild(_valueTd);
  } // Записываем в теблицу строки со значениями


  tableRes.appendChild(rawIndex);
  tableRes.appendChild(rawValue); // Добавим id таблицы

  tableRes.id = 'tableRemovable'; // Запишем таблицу на свое место

  targTable.appendChild(tableRes);
}
/**
 * Ваш код тут!
 *
 * Реализуйте функцию printUserMass
 * По аналогии с printUser
 * Только теперь функция будет работать с массивом объектов User
 * Нужно немного поменять цикл
 * Он также пройдется по всем элементам массива
 * Используйте for of или классический for
 * Однако в таблицу надо записывать не сам объект, а его свойство
 * свойтво -- логин пользователя
 *
 * В целом, в функции почти ничего не поменяется
 * за исключением пары строк приведенных ниже
 *
 * ...
 * так как нам точно нужен другой идетнификатор для второй таблице в документе
 * let oldTable = document.getElementById('tableRemovableUsers');
 * if (oldTable) {
 *     targTable.removeChild(oldTable);
 * }
 * ...
 * for (let i = 0; i < usersMass.length; i++){
 *     ...
 *     let valueTd = document.createElement('td');
 *     valueTd.innerText = anyArray[i].login;
 *     ..
 * }
 * ...
 * так как нам точно нужен другой идетнификатор для второй таблице в документе
 * tableRes.id = 'tableRemovableUsers';
 * ...
 *
*/


function printUserMass(anyArray, targTable) {
  var oldTable = document.getElementById('tableRemovableUsers');

  if (oldTable) {
    targTable.removeChild(oldTable);
  } // Создать элемент таблица


  var tableRes = document.createElement('table'); // Строка индекса

  var rawIndex = document.createElement('tr'); // Строка значений

  var rawValue = document.createElement('tr'); // Ячейка заголовок

  var index = document.createElement('th'); // Присвоим значение ячейки заголовка

  index.innerText = 'Index'; // Ячейка значений

  var valueTd = document.createElement('td'); // Присвоение значения ячейке значений

  valueTd.innerText = 'Value'; // Добавить к строкам новые ячейки

  rawIndex.appendChild(index);
  rawValue.appendChild(valueTd);

  for (var i = 0; i < usersMass.length; i++) {
    var _index2 = document.createElement('th');

    _index2.innerText = i;

    var _valueTd2 = document.createElement('td');

    _valueTd2.innerText = anyArray[i].loginUser;
    rawIndex.appendChild(_index2);
    rawValue.appendChild(_valueTd2);
  } // Записываем в теблицу строки со значениями


  tableRes.appendChild(rawIndex);
  tableRes.appendChild(rawValue); // Добавим id таблицы

  tableRes.id = 'tableRemovableUsers'; // Запишем таблицу на свое место

  targTable.appendChild(tableRes);
} // эта функция реализована для примера и уже работает


function popMass() {
  // чтобы проверить, что массив не пустой
  // мы получаем его длину
  // если длина 0 - выражение будет приведено к false
  if (baseMass.length) {
    // используем метод массива
    var result = baseMass.pop(); // записываем результат в html документ

    pop_shift_Value.innerHTML = '- ' + result; // вызов функции вывода массива

    printMass(baseMass, massOnBoard);
  } else {
    alert("Массив уже пуст!\nСначала добавьте значения");
  }
}

function shiftMass() {
  // чтобы проверить, что массив не пустой
  // мы получаем его длину
  // если длина 0 - выражение будет приведено к false
  if (baseMass.length) {
    /**
     * Ваш код тут
     * let result =
     */
    var result = baseMass.shift();
    pop_shift_Value.innerHTML = '- ' + result;
    printMass(baseMass, massOnBoard);
  } else {
    alert("Массив уже пуст!");
  }
}

function pushMass() {
  var pushVal = push_unshift_Value.value;

  if (pushVal) {
    /**
     * Ваш код тут
     * примените push к baseMass
     * 
     */
    var result = baseMass.push(pushVal);
    printMass(baseMass, massOnBoard); // это выведет обновленный массив
  } else {
    alert("Введите значение!");
  }
}

function unshiftMass() {
  var shiftVal = push_unshift_Value.value;

  if (shiftVal) {
    /**
     * Ваш код тут
     * примените unshift к baseMass
     * Вызовите printMass чтобы отобразить
     * новый массив
     */
    var result = baseMass.unshift(shiftVal);
  } else {
    alert("Введите значение!");
  }
}

function lengthMass() {
  /**
   * Ваш код тут
   * let result =
   * запишите в result длину массива
   */
  var result = baseMass.length;
  lengthValue.innerHTML = " - " + result;
}

function concatMass() {
  // В new_mass будет записан массив,
  // сформированный из значений поля ввода, записанных через запятую
  var new_mass = concatValue.value.split(',');
  /**
   * Ваш код тут
   * Напишите условие, чтобы проверить
   * что поле ввода не пустое
   * Если поле вводе не пустое - примените concat
   * метод массивов, позволяющий объединять один массив с другим
   * вот так --
   * основной_массив = основной_массив.concat(другой_массив)
   *
   * Если поле ввода пустое используйте окно alert
   */

  if (concatValue.value) {
    baseMass = baseMass.concat(new_mass);
    printMass(baseMass, massOnBoard);
  } else {
    alert('Пусто');
  }
}

function searchMass() {
  /**
   * Ваш код тут
   * Получите значение из элемента html с id -- searchValue
   * Если значение непустое примените метод indexOf
   * Этот метод позволит получить индекс элемента массива по значению
   * массив.indexOf(значение)
   * Если такого значения нет -- вернется -1
   *
   * Результат успешного поиска запишите в элементе html с id -- resIndex
   * Если значение не найдено или поле пустое используйте окно alert
   */
  var valueToSearch = searchValue.value;

  if (valueToSearch) {
    var result = baseMass.indexOf(valueToSearch);
    resIndex.innerHTML = " - " + result;
  } else {
    alert('Введите значние для поиска');
  }
}

function setOptions() {
  var id = usersMass.length;
  var opt = document.createElement("option");
  opt.value = String(id);
  opt.text = newUser.login;
  selectUser.appendChild(opt);
}

function addUser() {
  var requiredNotEmpty = login.value && age.value && userHeight.value;

  if (requiredNotEmpty) {
    var _newUser = new User(firstName.value, secName.value, lastName.value, login.value, age.value, userHeight.value);

    usersMass.push(_newUser);
    var id = usersMass.length;
    var opt = document.createElement("option");
    opt.value = String(id);
    opt.text = _newUser.login;
    selectUser.appendChild(opt);
  }

  firstName.value = "";
  secName.value = "";
  lastName.value = "";
  login.value = "";
  age.value = "";
  userHeight.value = "";
}

function midleHeight() {
  var sum = 0;

  for (var _i = 0, _usersMass = usersMass; _i < _usersMass.length; _i++) {
    var user = _usersMass[_i];
    sum += +user.height;
  }

  var result = sum / usersMass.length;
  userResult.innerHTML = "\u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0440\u043E\u0441\u0442 ".concat(result);
}

function midleAge() {
  var sum = 0;

  for (var _i2 = 0, _usersMass2 = usersMass; _i2 < _usersMass2.length; _i2++) {
    var user = _usersMass2[_i2];
    sum += +user.age;
  }

  var result = sum / usersMass.length;
  userResult.innerHTML = "\u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442 ".concat(result);
}

function countUsers() {
  userResult.innerHTML = "".concat(usersMass.length, " \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
} //Удаляет выбранного пользователя


function myFunc() {
  var selectedUser = selectUser.value;

  if (selectedUser) {
    var index = usersMass.map(function (e) {
      return e.login;
    }).indexOf(selectedUser);
    selectUser.options.remove(selectUser.selectedIndex);
    usersMass.splice(index, 1);
    userResult.innerHTML = "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(selectedUser, " \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0441 \u043D\u0430\u043C\u0438");
  } else {
    userResult.innerHTML = "\u0411\u0430\u0437\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043E\u043F\u0443\u0441\u0442\u043E\u0448\u0438\u043B\u0438 \u0434\u043E \u043D\u0430\u0441";
  }
}
/**
 * Ваш код тут
 *
 * Внимательно посмотрите на реализацию в файле script.js
 * Посмотрите на код в этом вайле выше
 *
 * Используйте написанную вами функцию printUserMass() для массива usersMass
 * В этот массив и записывайте объекты User
 *
 * селектор -- элемент html "выпадающий список"
 *
 * По аналогии реализуйте следующие функции
 * addUser() -- добавит нового пользователя, обновит массив и селектор
 * midleHeight() -- выведет средний рост пользователей
 * midleAge() -- выведет средний возраст
 * countUsers() -- выведет длину массива пользователей
 * myFunc() - функция которая работает с селектором, придумайте что сделать самостоятельно
 */


document.addEventListener("DOMContentLoaded", function () {
  printMass(baseMass, massOnBoard);
}); //В//нимание!
// Раскомментировать, когда реализуете printUserMass()
// document.addEventListener("DOMContentLoaded", function () { printUserMass(usersMass, massOfUser);});

document.addEventListener("DOMContentLoaded", function () {
  printUserMass(usersMass, massOfUser);
});
//# sourceMappingURL=students_script.dev.js.map
