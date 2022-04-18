// init
/* Читайте комментарии и допишите код где необходимо */

// Тут объяелен массив и его можно и нужно будет менять
let baseMass = ['Вася','Петя','Коля','Женя'];
// Это массив пользователей, работайте с ним
// для выполнения последнего задания
let usersMass = [];

// Напишите функцию-конструктор
// которая позволит создавать объекты User
function User (LastName, FirstName, patronymic, login, age, growth) {

     this.LastName = LastName;
     this.FirstName = FirstName;
     this.patronymic = patronymic;
     this.login = login;
     this.age = age;
     this.growth = growth;

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

function printUserMass (anyArray, targTable) {

    let oldTable = document.getElementById('tableRemovableUsers');

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
     index.innerText = 'Имя, Фамилия';
     // Ячейка значений
     let valueTd = document.createElement('td');
     // Присвоение значения ячейке значений
     valueTd.innerText = 'Логин';
     // Добавить к строкам новые ячейки
     rawIndex.appendChild(index);
     rawValue.appendChild(valueTd);

    for (let i = 0; i < usersMass.length; i++){

        let index = document.createElement('th');
        index.innerText = anyArray[i].LastName + " " + anyArray[i].FirstName;

        let valueTd = document.createElement('td');
        valueTd.innerText = anyArray[i].login;

        rawIndex.appendChild(index);
        rawValue.appendChild(valueTd);
    }

    tableRes.appendChild(rawIndex);
    tableRes.appendChild(rawValue);
    // Добавим id таблицы
    tableRes.id = 'tableRemovableUsers';
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
 * ...
 * так как нам точно нужен другой идетнификатор для второй таблице в документе
 * tableRes.id = 'tableRemovableUsers';
 * ...
 *
*/

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
        /**
         * Ваш код тут
         * примените push к baseMass
         */

        baseMass.push(pushVal);
        printMass(baseMass, massOnBoard); // это выведет обновленный массив
    } else {
        alert("Введите значение!");
    }
}

function unshiftMass () {

    let shiftVal = push_unshift_Value.value;

    if (shiftVal) {
        /**
         * Ваш код тут
         * примените unshift к baseMass
         * Вызовите printMass чтобы отобразить
         * новый массив
         */

        baseMass.unshift(shiftVal);
        printMass(baseMass, massOnBoard);
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

    if (concatValue.value == "") {
        alert("Поле ввода пустое!");
    } else {
        baseMass = baseMass.concat(new_mass);
        concatValue.value = '';
    }
    printMass(baseMass, massOnBoard);
}

function searchMass (){
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

    if (searchValue.value){
        let indexElem = baseMass.indexOf(searchValue.value);
        searchValue.value = '';
        if (indexElem != -1){
            resIndex.innerHTML = indexElem;
        }else{
            resIndex.innerHTML = '- Элемент не найден!';
        }
    }else{
        alert('Поле для поиска пустое!');
    }
    
}

function addUser() {
     // это значит, что если хотябы одно поле пустое
    // в isNotNull запишется пустое значение
    let isNotNull = String(firstName.value) && String(secName.value);
    let isNotNullNumber = Number(age.value) && Number(userHeight.value);
    // проверяем что нет ни одного пустого поля инпут
    if (isNotNull && isNotNullNumber) {
        // создаем объект типа Cubik
        let NewUser = new User(
            firstName.value,
            lastName.value,
            secName.value,
            login.value,
            age.value,
            userHeight.value        
        );
        // будем шспользовать id объета из массива
        // для дочерних элементов селектора
        let id = usersMass.length;
        // добавляем новый элемент в массив
        usersMass.push(NewUser); 

        // создаем дочерний элемент селектора -- строка выпадающего списка
        let opt = document.createElement("option");
        // value позволит в дальнейшем идентифицировать выбранный элемент селектора
        // в данном длучае будет соответсвовать индексу в массиве
        opt.value = String(id);
        // текст - то что увидит пользователь в выпадающем списке
        opt.text = NewUser.login;
        // теперь к элементу документа мы добавили новый дочерний элемент
        selectUser.appendChild(opt);

        // сотрем ненужный текст в input-ах в случае успеха
        firstName.value = '';
        secName.value = '';
        lastName.value = '';
        login.value = '';
        age.value = '';
        userHeight.value = '';
    }
    else {
        // если не все поля заполнены - вызываем окно alert
        alert("Введите значения! Убедитесь что поля не пустые");
    }
    printUserMass(usersMass, massOfUser);
}

function midleHeight() {

    let sum = 0;
    let lenghtN = usersMass.length;

    if (usersMass.length > 0) {

        for (let i = 0; i < usersMass.length; i++) {

            sum = sum + Number(usersMass[i].growth);

        }
        sum = sum / lenghtN;
        userResult.innerHTML = "средний рост - " + sum;
    } else {

        userResult.innerHTML = "Нет ни одного пользователя!";

    }

}

function countUsers() {

    let result = usersMass.length;
    
    userResult.innerHTML = "количество пользователей - " + result;
}

function midleAge() {
    let sum = 0;
    let ageN = usersMass.length;
    
    if (usersMass.length > 0) {

        for (let i = 0; i < usersMass.length; i++) {

            sum = sum + Number(usersMass[i].age);
            console.log(sum);
        }
        sum = sum / ageN;
        userResult.innerHTML = "средний возраст - " + sum;
    } else {

        userResult.innerHTML = "Нет ни одного пользователя!";

    }

}

function myFunc() {

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

document.addEventListener("DOMContentLoaded", function () { printMass(baseMass, massOnBoard);});

document.addEventListener("DOMContentLoaded", function () { printUserMass(usersMass, massOfUser);});
