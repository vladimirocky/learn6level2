// init
/* Читайте комментарии и допишите код где необходимо */

// Тут объяелен массив и его можно и нужно будет менять
let baseMass = ["Вася", "Петя", "Коля", "Женя"];
// Это массив пользователей, работайте с ним
// для выполнения последнего задания
let usersMass = [];

// Напишите функцию-конструктор
// которая позволит создавать объекты User
function User(name, surname, lastname, login, age, height) {
  // Ваш код тут

  this.name = name;
  this.surname = surname;
  this.lastname = lastname;
  this.login = login;
  this.age = age;
  this.height = height;
}

// Функция реализует вывод массива на экран
// Если вы изменили массив - вызовите эту функцию чтобы отобразить актальные значения
/**
 *
 * @param anyArray - массив с данными которые будем отображать
 * @param targTable - элемент HTML в котором мы разместим нашу таблицу
 */
function printMass(anyArray, targTable) {
  // это позволит "почистить" наш html от старой таблицы
  let oldTable = document.getElementById("tableUsersRemovable");
  // если таблица не пустая - почистим ее
  if (oldTable) {
    targTable.removeChild(oldTable);
  }

  // Создать элемент таблица
  let tableRes = document.createElement("table");
  // Строка индекса
  let rawIndex = document.createElement("tr");
  // Строка значений
  let rawValue = document.createElement("tr");
  // Ячейка заголовок
  let index = document.createElement("th");
  // Присвоим значение ячейки заголовка
  index.innerText = "Index";
  // Ячейка значений
  let valueTd = document.createElement("td");
  // Присвоение значения ячейке значений
  valueTd.innerText = "Value";
  // Добавить к строкам новые ячейки
  rawIndex.appendChild(index);
  rawValue.appendChild(valueTd);

  // Цикл, который пройдется по массиву и отрисует его значения
  for (let key_elem in anyArray) {
    // умышленно используем in
    // чтобы использовать реальные индексы элементов массива
    // Ячейка заголовок
    let index = document.createElement("th");
    index.innerText = key_elem;
    // Ячейка значений
    let valueTd = document.createElement("td");
    valueTd.innerText = anyArray[key_elem];
    // Добавить к строкам новые ячейки
    rawIndex.appendChild(index);
    rawValue.appendChild(valueTd);
  }

  // Записываем в теблицу строки со значениями
  tableRes.appendChild(rawIndex);
  tableRes.appendChild(rawValue);
  // Добавим id таблицы
  tableRes.id = "tableUsersRemovable";
  // Запишем таблицу на свое место
  targTable.appendChild(tableRes);
}

function printUserMass(anyArray, targTable) {
  // это позволит "почистить" наш html от старой таблицы
  let oldTable = document.getElementById("massOfUser");
  // если таблица не пустая - почистим ее
  if (oldTable) {
    targTable.removeChild(oldTable);
  }

  // Создать элемент таблица
  let tableRes = document.createElement("table");
  // Строка индекса
  let rawIndex = document.createElement("tr");
  // Строка значений
  let rawValue = document.createElement("tr");
  // Ячейка заголовок
  let index = document.createElement("th");
  // Присвоим значение ячейки заголовка
  index.innerText = "Index";
  // Ячейка значений
  let valueTd = document.createElement("td");
  // Присвоение значения ячейке значений
  valueTd.innerText = "Value";
  // Добавить к строкам новые ячейки
  rawIndex.appendChild(index);
  rawValue.appendChild(valueTd);

  // Цикл, который пройдется по массиву и отрисует его значения
  for (let user of anyArra) {
    let index = document.createElement("th");
    index.innerText = user.login;
    // Ячейка значений
    let valueTd = document.createElement("td");
    valueTd.innerText = "someText";
    // Добавить к строкам новые ячейки
    rawIndex.appendChild(index);
    rawValue.appendChild(valueTd);
  }

  // Записываем в теблицу строки со значениями
  tableRes.appendChild(rawIndex);
  tableRes.appendChild(rawValue);
  // Добавим id таблицы
  tableRes.id = "tableRemovableUsers";
  // Запишем таблицу на свое место
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

*/

// эта функция реализована для примера и уже работает
function popMass() {
  // чтобы проверить, что массив не пустой
  // мы получаем его длину
  // если длина 0 - выражение будет приведено к false
  if (baseMass.length) {
    // используем метод массива
    let result = baseMass.pop();
    // записываем результат в html документ
    pop_shift_Value.innerHTML = "- " + result;
    // вызов функции вывода массива
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
    // Ваш код тут
    let result = baseMass.shift();

    pop_shift_Value.innerHTML = "- " + result;
    printMass(baseMass, massOnBoard);
  } else {
    alert("Массив уже пуст!");
  }
}

function pushMass() {
  let pushVal = push_unshift_Value.value;
  if (pushVal) {
    let result = baseMass.push(pushVal);

    printMass(baseMass, massOnBoard); // это выведет обновленный массив
  } else {
    alert("Введите значение!");
  }
}

function unshiftMass() {
  let shiftVal = push_unshift_Value.value;

  if (shiftVal) {
    /**
     * Ваш код тут
     * примените unshift к baseMass
     * Вызовите printMass чтобы отобразить
     * новый массив
     */

    let result = baseMass.unshift(shiftVal);

    printMass(baseMass, massOnBoard);
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

  const result = baseMass.length;
  lengthValue.innerHTML = " - " + result;
}

function concatMass() {
  // В new_mass будет записан массив,
  // сформированный из значений поля ввода, записанных через запятую
  let new_mass = concatValue.value.split(",");
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
    console.log(1);
    baseMass = baseMass.concat(new_mass);
    printMass(baseMass, massOnBoard);
  } else {
    alert("it's empty, Sir :(");
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
  if (searchValue.value) {
    let result = baseMass.indexOf(searchValue.value);
    if (result === -1) {
      alert("not found");
    } else {
      resIndex.innerHTML = `:"${result}" `;
    }
  } else {
    alert("it's empty, Sir :(");
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

function setOptions() {
  let id = usersMass.length;

  let opt = document.createElement("option");

  opt.value = String(id);

  opt.text = newUser.login;

  selectUser.appendChild(opt);
}

function addUser() {
  const requiredNotEmpty = login.value && age.value && userHeight.value;

  if (requiredNotEmpty) {
    let newUser = new User(
      firstName.value,
      secName.value,
      lastName.value,
      login.value,
      age.value,
      userHeight.value
    );
    usersMass.push(newUser);

    let id = usersMass.length;

    let opt = document.createElement("option");

    opt.value = String(id);

    opt.text = newUser.login;

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
  let sum = 0;
  for (let user of usersMass) {
    sum += +user.height;
  }
  let result = sum / usersMass.length;

  userResult.innerHTML = `средний рост ${result}`;
}

function midleAge() {
  let sum = 0;
  for (let user of usersMass) {
    sum += +user.age;
  }
  let result = sum / usersMass.length;

  userResult.innerHTML = `средний возраст ${result}`;
}

function countUsers() {
  userResult.innerHTML = `${usersMass.length} пользователей`;
}

//Удаляет выбранного пользователя
function myFunc() {
  const selectedUser = selectUser.value;

  if (selectedUser) {
    const index = usersMass.map((e) => e.login).indexOf(selectedUser);
    selectUser.options.remove(selectUser.selectedIndex);
    usersMass.splice(index, 1);

    userResult.innerHTML = `Милорд, нашу базу данных пожрал долгоносик. Пользователь ${selectedUser} больше не с нами`;
  } else {
    userResult.innerHTML = `Базу пользователей опустошили до нас`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  printMass(baseMass, massOnBoard);
});
/**
 * Внимание!
 * Раскомментировать, когда реализуете printUserMass()
 */
document.addEventListener("DOMContentLoaded", function () {
  printUserMass(usersMass, massOfUser);
});
