// init
/* Читайте комментарии и допишите код где необходимо */

// Тут объяелен массив и его можно и нужно будет менять
let baseMass = ['Вася','Петя','Коля','Женя'];
// Это массив пользователей, работайте с ним
// для выполнения последнего задания
let usersMass = [];

// Напишите функцию-конструктор
// которая позволит создавать объекты User
function User (name,secondName,familyName,loginUser,ageUser,heightUser) {
    this.name = name;
    this.secondName = secondName;
    this.familyName = familyName;
    this.loginUser = loginUser;
    this.ageUser = ageUser;
    this.heightUser = heightUser;
}

//Добавляем функцию которая реализует добавление пользователей
function addUser(){
    let isNotNull = nameUser.value && secName.value && lastName.value && login.value && Number(age.value) && Number(userHeight.value);
    console.log(nameUser.value);

    if(isNotNull){
        let newUser = new User(
            name = nameUser.value,
            secondName = secName.value,
            familyName = lastName.value,
            loginUser = login.value,
            ageUser = age.value,
            heightUser = userHeight.value
        );

        let id = usersMass.length;
        usersMass.push(newUser);

        

        let opt = document.createElement("option");

        opt.value = String(id);
        opt.text = newUser.loginUser;
        selectUser.appendChild(opt);


        printUserMass(usersMass,massOfUser);

        document.getElementById('nameUser').value = '';
        document.getElementById('secName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('login').value = '';
        document.getElementById('age').value = '';
        document.getElementById('userHeight').value = '';
    }else{
        alert("Введите значения для всех полей, проверьте что значения возраста и роста это числа!");
    }
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


function printUserMass(anyArray,targTable){
    let oldTable = document.getElementById('tableRemovableUsers');
    if (oldTable) {
        targTable.removeChild(oldTable);
    }

    let tableRes = document.createElement('table')
    let rawIndex = document.createElement('tr')
    let rawValue = document.createElement('tr');
    let index = document.createElement('th');
    index.innerText = 'Index';
    let valueTd = document.createElement('td');
    valueTd.innerText = 'Value';
    rawIndex.appendChild(index);
    rawValue.appendChild(valueTd);

    for (let i = 0; i < usersMass.length; i++){
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

        result = baseMass.shift();

        pop_shift_Value.innerHTML = '- ' + result;
        printMass(baseMass, massOnBoard);
    } else {
        alert("Массив уже пуст!");
    }
}

function pushMass () {

    let pushVal = push_unshift_Value.value;
    if (pushVal) {
        baseMass.push(pushVal);
        //Сбросим значение чтобы было удобнее добавлять новые элементы массива
        push_unshift_Value.value = '';
        printMass(baseMass, massOnBoard); // это выведет обновленный массив
    } else {
        alert("Введите значение!");
    }
}

function unshiftMass () {

    let shiftVal = push_unshift_Value.value;

    if (shiftVal) {
        baseMass.unshift(shiftVal);
        push_unshift_Value.value = '';
        printMass(baseMass, massOnBoard);
    } else {
        alert("Введите значение!");
    }
}

function lengthMass(){
    result = baseMass.length;
    if(result != 0){
        lengthValue.innerHTML = " - " + result;
    }else{
        lengthValue.innerHTML = '- Массив пуст';
    }
    
}

function concatMass (){
    // В new_mass будет записан массив,
    // сформированный из значений поля ввода, записанных через запятую
    let new_mass = concatValue.value.split(',');
    
    //Если первый элемент массива пустой(а в качестве разделителя мы используем ','), значит массив пустой, а значит поле ввода пустое
    if(new_mass[0] == ''){
        alert('Заполните значения массива!');
    }else{
        baseMass = baseMass.concat(new_mass);
        concatValue.value = '';
        printMass(baseMass, massOnBoard);
    }
}

function searchMass (){
    if(searchValue.value){
        let indexElem = baseMass.indexOf(searchValue.value);
        searchValue.value = '';
        if(indexElem != -1){
            resIndex.innerHTML = indexElem;
        }else{
            resIndex.innerHTML = '- Элемент не найден!';
        }
    }else{
        alert('Поле для поиска пустое!');
    }
}



function midleHeight(){
    let storage = 0;
    let countUsers = usersMass.length;
    if(countUsers>0){
        for(userUnit of usersMass){
            storage += Number(userUnit.heightUser);
        }
        let result = storage/countUsers;
        userResult.innerHTML = result;
    }else{
        alert('Нет ни одного пользователя!');
    }
}

function midleAge(){
    let storage = 0;
    let countUsers = usersMass.length;
    if(countUsers>0){
        for(userUnit of usersMass){
            storage += Number(userUnit.ageUser);
        }
        let result = storage/countUsers;
        userResult.innerHTML = result;
    }else{
        alert('Нет ни одного пользователя!');
    }
}

function countUsers(){
    let countUsers = usersMass.length;
    if(countUsers>0){
        userResult.innerHTML = countUsers;
    }else{
        alert('Нет ни одного пользователя!');
    }
}

//Пишем функцию транслитерации - она нам понадобится для определения пола
function translit(word){
	var answer = '';
	var converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};
 
	for (var i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
 
	return answer;
}

//Функция определения пола
function myFunc(){
    //Достаем id из select
    let id = selectUser.value;
    //Получаем имя из массива объектов userMass и переводим его в транслит
    let userName = translit(usersMass[id].name);
    console.log(userName);
    //Подготавливаем ссылку с нужными параметрами
    let url = 'https://api.genderize.io?name='+userName;

    //Оборачиваем запрос в асинхронную функцию
    async function getGender(){
        let response = await fetch(url);
        //Если пришел 200-й код, все ок.
        if (response.ok) {
            //Получаем json
            let json = await response.json();
            
            //Из объекта json получаем пол
            let gender = json.gender;

            //Выводим имя
            if(gender == 'male'){
                userResult.innerHTML = 'Ваш пол мужской';
            }
            if(gender == 'female'){
                userResult.innerHTML = 'Ваш пол женский';
            }
            if(gender == 'null'){
                userResult.innerHTML = 'Не получилось определить пол';
            }
        } else {
        alert("Ошибка HTTP: " + response.status);
        }
    }

    getGender();
}

function clearData(){
    document.getElementById('nameUser').value = '';
    document.getElementById('secName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('login').value = '';
    document.getElementById('age').value = '';
    document.getElementById('userHeight').value = '';
}

document.addEventListener("DOMContentLoaded", function () { printMass(baseMass, massOnBoard);});

document.addEventListener("DOMContentLoaded", function () { printUserMass(usersMass, massOfUser);});