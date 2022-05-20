/**
 * -------------------------------------------------------
 * 1. Беда с фигурными скобками!
 * 2. Какую из двух printUser планировалось использовать?
 * -------------------------------------------------------
 */


// init
/* Читайте комментарии и допишите код где необходимо */

// Тут объяелен массив и его можно и нужно будет менять
let baseMass = ['Вася','Петя','Коля','Женя'];
// Это массив пользователей, работайте с ним
// для выполнения последнего задания
let usersMass = [];

// Напишите функцию-конструктор
// которая позволит создавать объекты User
function User (login, name, age, growth, secName, lastName) {
    this.name = name;
    this.login = login;
    this.age = age;
    this.growth = growth;
    this.secName = secName;
    this.lastName = lastName;

    

    /**
     * -------------------------------------------------------
     * 3. А как же поля для:
     *  - отчество
     *  - фамилия
     *  - возраст
     *  - рост
     *  ???
     *  4. Как минимум возраст и рост нужны чтобы считать:
     *   - средний рост
     *   - средний возраст
     *
     *   -------------------------------------------------------
     * Ваш код тут
     *
    this.name = name;
    this...
    ...
     this.login = login;
     ...
    *
     */
}
function addUser(){
    let isNotNull = name.value && secName.value && lastName.value && login.value && age.value && growth.value;
    if (isNotNull) {
    let trueMass = new User (
        name.value,
        secName.value,
        lastName.value,
        login.value,
        age.value,
        growth.value,
        )
        let id = usersMass.length;
        usersMass.push(trueMass);
        let opt = document.createElement("option");
        opt.value - String(id);
        opt.text = trueMass.name;
        selectUser.appenChild(opt);
        name.value = '';
        secName.value = '';
        lastName.value = '';
        login.value = '';
        age.value = '';
        growth = '';
    }else {
        alert("Пусто!")
    }
}
// Функция реализует вывод массива на экран
// Если вы изменили массив - вызовите эту функцию чтобы отобразить актальные значения


/**
 * -------------------------------------------------------
 * 5. Какая-то недоделанная функция:
 *  - нигде не используется
 *  - "targtable.innerHTML = nameUser" заменит весь html на одно значение nameUser
 * -------------------------------------------------------
 */
function UserName () {
    let id = selectUser.value;
    if (id) {
        let nameUser = baseMass[id];
        targtable.innerHTML = nameUser;
    }
    else {
        alert("Не выбран пользователь!");
    }
}

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
    /**
     * @param User
     * @param targTable
     */

    function printUser (User, targTable) {

        let oldTable = document.getElementById('tableRemovableUsers')
        if (oldTable) {
            targTable.removeChild(oldTable);
        }
        let tableRes = document.createElement('table');
        let rawIndex = document.createElement('tr');
        let rawValue = document.createElement ('tr');
        let index = document.createElement('th');
        index.innerText = 'Index';
        let valueTd = document.createElement('td');
        valueTd.innerText = 'Value';
        rawIndex.appendChild(index);
        rawIndex.appendChild(valueTd);

        for (let i=0; i<usersMass.length;i++){
            let index = document.createElement('th');
            /**
             * -------------------------------------------------------
             * 6. Верояно индексом будет i а не key_elem
             *
             * что таке key_elem,Users, tarTable непонятно...
             * функция ничего о них не знает
             * -------------------------------------------------------
             */
            index.innetText = key_elem;
            let valueTd = document.createElement('td');
            valueTd.innerText = Users[i].login;
            rawIndex.appendChild(index);
            rawValue.appendChild(valueTd);

        }
        tableRes.appenChild(rawIndex);
        tableRes.appenChild(rawValue);
        tableRes.id = 'tableRemovableUsers';
        tarTable.appendChild(tableRes);

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
        /**
         * Ваш код тут
         * let result =
         */
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
        let result = baseMass.push();
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

        let result = baseMass.unshift();
        printMass(baseMass, massOnBoard);
    } else {
        alert("Введите значение!");
    }
}

function lengthMass(){
    /**
     * Ваш код тут
     * let result =
     * запишите в result длину массива
     */
    let result = baseMass.length;
    lengthValue.innerHTML = " - " + result;
}

function concatMass (){
    // В new_mass будет записан массив,
    // сформированный из значений поля ввода, записанных через запятую
    let new_mass = concatValue.value.split(',');
    let isNotNull = (new_mass.value);
    /**
     * -------------------------------------------------------
    
     * -------------------------------------------------------
     */
    if (isNotNull) {
        old_mass = old_mass.concat(new_mass);
    }
    else{
        alert('Пустое поле, введите значения!')
    }
}
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

 

function searchMass (){
    let newMass = document.getElementById('searchValue');
    let isNotNull = (newMass.value);
    if (isNotNull) {
        /**
         * -------------------------------------------------------
         * 9. indexOf() это метод, а не коллекция, поэтому квадратные скобки тут указаны ошибочно
         * 10. Откуда взять i ?
         * +
         */
        let result = newMass.indexOf(newMass);
        resIndex.innerHeight = result;
    }
        else {
            result = -1;
            alert('Значение не найдено или поле пустое!');
        }

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
/**
 * ------------------------------------------------------
 * 11. Такая функция уже есть, с тем же именем и ошибками
 * ------------------------------------------------------
 */
// function printUser (User, targTable) {
//     let oldTable = document.getElementById('tableRemovableUsers')
//     if (oldTable) {
//         targTable.removeChild(oldTable);
//     }
//     let tableRes = document.createElement('table');
//     let rawIndex = document.createElement('tr');
//     let rawValue = document.createElement ('tr');
//     let index = document.createElement('th');
//     index.innerText = 'Index';
//     let valueTd = document.createElement('td');
//     valueTd.innerText = 'Value';
//     rawIndex.appendChild(index);
//     rawIndex.appendChild(valueTd);

//     for (let i=0; i<usersMass.length;i++){
//         let index = document.createElement('th');
//         index.innetText = key_elem;
//         let valueTd = document.createElement('td');
//         valueTd.innerText = Users[i].login;
//         rawIndex.appendChild(index);
//         rawValue.appendChild(valueTd);

//     }
//     tableRes.appenChild(rawIndex);
//     tableRes.appenChild(rawValue);
//     tableRes.id = 'tableRemovableUsers';
//     tarTable.appendChild(tableRes);
// }

function addUser () {

    let addUser = new User(
        /**
         * ------------------------------------------------------
         * 12. Откуда берется index ? +
         * ------------------------------------------------------
         */

         name.value,
         secName.value,
         lastName.value,
         login.value,
         age.value,
         growth.value
    );
    let id = usersMass.length;
    userMass.push(addUser);

    let opt = document.createElement("option");
    opt.value = String(id);
    opt.text = newMass.name;
    selectMass.appendChild(opt);
    index.value = '';
    login.value = '';
    age.value = '';
    }
/**
 * ------------------------------------------------------
 * 13. Если есть else то где if ? удалил
 * ------------------------------------------------------
 */
/**
 * ------------------------------------------------------
 * 14. Такой функции в index.html не используется
 * там есть - midleHeight()
 * ------------------------------------------------------
 */

function midleheight() {
    let isNotNull = Number(index.value) && Number(login.value);
    if (isNotNull) {
        for (let index in usersMass)
            let summAges += age.value;
            // почему то просит в сложение +, и тд
            let midleheight = summAges / usersMass.length;
            let Countusers = usersMass.length;
            midleheight.innerhtml = midleheight;
            Countusers.innerhtml = usersMass.length;
    }
    else {
        ("Введите значения!")
    }
    }

function findperson() {
    let person = document.getElementById('person');
       if (person) {
           usersMass.values();
           alert("Такой человек есть в списке!")
       }
       else {
        alert("Такой человек в списке отсутствует!")
    }

}
document.addEventListener("DOMContentLoaded", function () { printMass(baseMass, massOnBoard);});
/**
 * Внимание!
 * ------------------------------------------------
 *  :(
 * ------------------------------------------------
 * Раскомментировать, когда реализуете printUserMass()
document.addEventListener("DOMContentLoaded", function () { printUserMass(usersMass, massOfUser);});
*/