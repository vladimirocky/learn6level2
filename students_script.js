// init
/* Читайте комментарии и допишите код где необходимо */

// Тут объяелен массив и его можно и нужно будет менять
let baseMass = ['Вася','Петя','Коля','Женя'];
// Это массив пользователей, работайте с ним
// для выполнения последнего задания
let usersMass = [];
// Напишите функцию-конструктор
// которая позволит создавать объекты User
function User (name,surname,secName,login,age,height) {
    this.name = name;
    this.surname = surname;
    this.secName = secName;
    this.login = login;
    this.age = Number(age);
    this.height = Number(height);
}

// Функция реализует вывод массива на экран
// Если вы изменили массив - вызовите эту функцию чтобы отобразить актальные значения
/**
 *
 * @param anyArray - массив с данными которые будем отображать
 * @param targTable - элемент HTML в котором мы разместим нашу таблицу
 */
function printMass (anyArray, targTable) {
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
    for (let key_elem in anyArray){
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

function printUserMass(userToShow, targTable) {
    let oldTable = document.getElementById('tableRemovableUsers');
    if (oldTable) {
        targTable.removeChild(oldTable);
    }
    let tableRes = document.createElement('table');
    let rawUser = document.createElement('tr');
    let login = document.createElement('th');
    login.innerText = 'login'
    let name = document.createElement('th');
    name.innerText = 'name'
    let secName = document.createElement('th');
    secName.innerText = 'second name'
    let surname = document.createElement('th');
    surname.innerText = 'surname'
    let age = document.createElement('th');
    age.innerText = 'age'
    let height = document.createElement('th');
    height.innerText = 'height'
    rawUser.appendChild(login);
    rawUser.appendChild(name);
    rawUser.appendChild(secName);
    rawUser.appendChild(surname);
    rawUser.appendChild(age);
    rawUser.appendChild(height);
    tableRes.appendChild(rawUser);
    if (userToShow.login !== undefined) {
        rawUser = document.createElement('tr');
        login = document.createElement('td');
        login.innerText = userToShow.login;
        name = document.createElement('td');
        name.innerText = userToShow.name;
        secName = document.createElement('td');
        secName.innerText = userToShow.secName;
        surname = document.createElement('td');
        surname.innerText = userToShow.surname;
        age = document.createElement('td');
        age.innerText = userToShow.age;
        height = document.createElement('td');
        height.innerText = userToShow.height;
        rawUser.appendChild(login);
        rawUser.appendChild(name);
        rawUser.appendChild(secName);
        rawUser.appendChild(surname);
        rawUser.appendChild(age);
        rawUser.appendChild(height);
        tableRes.appendChild(rawUser)
    }
    tableRes.id = 'tableRemovableUsers';
    massOfUser.appendChild(tableRes);
}

// эта функция реализована для примера и уже работает
function popMass () {
    // чтобы проверить, что массив не пустой
    // мы получаем его длину
    // если длина 0 - выражение будет приведено к false
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

function shiftMass(){
    // чтобы проверить, что массив не пустой
    // мы получаем его длину
    // если длина 0 - выражение будет приведено к false
    if (baseMass.length) {
        let result = baseMass.shift();
        pop_shift_Value.innerHTML = '- ' + result;
        printMass(baseMass, massOnBoard);
    } else {
        alert("Массив уже пуст!");
    }
}

function pushMass () {

    let pushVal = push_unshift_Value.value;
    if (pushVal) {
        baseMass.push(pushVal)
        printMass(baseMass, massOnBoard); // это выведет обновленный массив
    } else {
        alert("Введите значение!");
    }
}

function unshiftMass () {

    let shiftVal = push_unshift_Value.value;

    if (shiftVal) {
        baseMass.unshift(shiftVal);
        printMass(baseMass,massOnBoard);
    } else {
        alert("Введите значение!");
    }
}

function lengthMass(){
    let result = baseMass.length;
    lengthValue.innerHTML = " - " + result;
}

function concatMass (){
    // В new_mass будет записан массив,
    // сформированный из значений поля ввода, записанных через запятую
    let new_mass = concatValue.value.split(',');
    if (concatValue.value) {
        baseMass = baseMass.concat(new_mass);
        printMass(baseMass, massOnBoard)
    }
    else
        alert('Введите значение')
}

function searchMass (){
    let valueToSearch = searchValue.value;
    if (valueToSearch) {
        let result = baseMass.indexOf(valueToSearch);
        resIndex.innerHTML = " - " + result;
    }
    else alert('Введите значние для поиска')
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
function addUser() {
    let isNotNull = login.value && secName.value &&
    lastName.value && nameOfUser.value &&
    Number(age.value) && Number(userHeight.value);
    if (isNotNull) {
        let newUser = new User(
            nameOfUser.value,
            lastName.value,
            secName.value,
            login.value,
            age.value,
            userHeight.value,
        )
        let id = usersMass.length;
        usersMass.push(newUser);
        let opt = document.createElement("option");
        opt.value = String(id);
        opt.text = newUser.login;
        selectUser.appendChild(opt);
        login.value = '';
        secName.value = '';
        lastName.value = '';
        nameOfUser.value = '';
        age.value = '';
        userHeight.value = '';
    }
    else alert('Убедитесь, что все значнения полей введены правильно');
}
function showUser() {
    let id = selectUser.value;
    if (id) {
        printUserMass(usersMass[id], massOfUser)
    }
    else alert('Не выбран пользователь')
}
function middleHeight() {
    let sumHeight = 0, i = 0;
    for (elem of usersMass) {
        sumHeight += elem.height;
        i++;
    }
    let middleH = sumHeight/i;
    userResult.innerHTML = middleH;
}
function middleAge() {
    let sumAge = 0, i = 0;
    for (elem of usersMass) {
        sumAge += elem.age;
        i++;
    }
    let middleA = sumAge/i;
    userResult.innerHTML = middleA;
}
function countUsers() {
    userResult.innerHTML = usersMass.length;
}
function removeUser() {
    let id = selectUser.value;
    if (id) {
        usersMass.splice(id,1);
        let elems = document.getElementsByTagName("option");
        selectUser.removeChild(elems[id]);
        for (elem of elems) {
            if (elem.value>id) elem.value--;
        }
    }
    else alert('Выберите пользователя, которого хотите удалить')
}

document.addEventListener("DOMContentLoaded", function () { printMass(baseMass, massOnBoard);});
document.addEventListener("DOMContentLoaded", function () { printUserMass(usersMass, massOfUser);});