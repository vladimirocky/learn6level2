let baseMass = ['Вася','Петя','Коля','Женя'];
let usersMass = [];
function User (name,secondName,familyName,loginUser,ageUser,heightUser) {
    this.name = name;
    this.secondName = secondName;
    this.familyName = familyName;
    this.loginUser = loginUser;
    this.ageUser = ageUser;
    this.heightUser = heightUser;
}
function printMass (anyArray, targTable) {
    let oldTable = document.getElementById('tableRemovable');
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
    for (let key_elem in anyArray) {
        let index = document.createElement('th');
        index.innerText = key_elem;
        let valueTd = document.createElement('td');
        valueTd.innerText = anyArray[key_elem];
        rawIndex.appendChild(index);
        rawValue.appendChild(valueTd);
    }
    tableRes.appendChild(rawIndex);
    tableRes.appendChild(rawValue);
    tableRes.id = 'tableRemovable';
    targTable.appendChild(tableRes);
}
function printUserMass(anyArray,targTable) {
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
    for (let i = 0; i < usersMass.length; i++) {
        let index = document.createElement('th');
        index.innerText = i;
        let valueTd = document.createElement('td');
        valueTd.innerText = anyArray[i].loginUser;
        rawIndex.appendChild(index);
        rawValue.appendChild(valueTd);
    }
    tableRes.appendChild(rawIndex);
    tableRes.appendChild(rawValue);
    tableRes.id = 'tableRemovableUsers';
    targTable.appendChild(tableRes);
}
function popMass () {
    if (baseMass.length) {
        let result = baseMass.pop();
        pop_shift_Value.innerHTML = '- ' + result;
        printMass(baseMass, massOnBoard);
    } else {
        alert("Нечего выталкивать.\nМассив пуст.");
    }
}
function shiftMass() {
    if (baseMass.length) {
        result = baseMass.shift();
        pop_shift_Value.innerHTML = '- ' + result;
        printMass(baseMass, massOnBoard);
    } else {
        alert("Нечего сдвигать.\nМассив пуст.");
    }
}
function pushMass () {
    let pushVal = push_unshift_Value.value;
    if (pushVal) {
        baseMass.push(pushVal);
        push_unshift_Value.value = '';
        printMass(baseMass, massOnBoard);
    } else {
        alert("Пожалуйста, введите значение.");
    }
}
function unshiftMass () {
    let shiftVal = push_unshift_Value.value;
    if (shiftVal) {
        baseMass.unshift(shiftVal);
        push_unshift_Value.value = '';
        printMass(baseMass, massOnBoard);
    } else {
        alert("Пожалуйста, введите значение.");
    }
}
function lengthMass() {
    result = baseMass.length;
    if(result != 0) {
        lengthValue.innerHTML = " - " + result;
    }
    else {
        lengthValue.innerHTML = " - " + 0;
    }
}
function concatMass () {
    let new_mass = concatValue.value.split(',');
    if(new_mass[0] == '') {
        alert('Заполните значения массива!');
    } else{
        baseMass = baseMass.concat(new_mass);
        concatValue.value = '';
        printMass(baseMass, massOnBoard);
    }
}
function searchMass () {
    if(searchValue.value) {
        let indexElem = baseMass.indexOf(searchValue.value);
        searchValue.value = '';
        if(indexElem != -1) {
            resIndex.innerHTML = indexElem;
        }
    } else {
        alert('Поле для поиска не заполнено или элемент не найден.\nПожалуйста повторите попытку, изменив входные данные');
    }
}
function addUser() {
    let isNotNull = nameUser.value && secName.value && lastName.value && login.value && Number(age.value) && Number(userHeight.value);
    console.log(nameUser.value);
    if(isNotNull) {
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
        alert("Все поля обязательны для заполнения.\nВозможно вы ввели не корректные данные.");
    }
}
function midleHeight() {
    let storage = 0;
    let countUsers = usersMass.length;
    if(countUsers>0){
        for(userUnit of usersMass) {
            storage += Number(userUnit.heightUser);
        }
        let result = storage/countUsers;
        userResult.innerHTML = result;
    } else {
        alert('Нет возможности вычислить средний рост пользователей.\nПожалуйста, добавьте хотя бы одного пользователя.');
    }
}
function midleAge() {
    let storage = 0;
    let countUsers = usersMass.length;
    if(countUsers>0){
        for(userUnit of usersMass) {
            storage += Number(userUnit.ageUser);
        }
        let result = storage/countUsers;
        userResult.innerHTML = result;
    }else{
        alert('Нет возможности вычислить средний возраст пользователей.\nПожалуйста, добавьте хотя бы одного пользователя.');
    }
}
function countUsers() {
    let countUsers = usersMass.length;
    if(countUsers>0) {
        userResult.innerHTML = countUsers;
    } else {
        alert('Нет возможности вычислить количество пользователей.\nПожалуйста, добавьте хотя бы одного пользователя.');
    }
}
function myFunc () {
    document.getElementsByClassName('ddd')[0].style.background = "#6f4e37git";
}
document.addEventListener("DOMContentLoaded", function () { printMass(baseMass, massOnBoard);});
document.addEventListener("DOMContentLoaded", function () { printUserMass(usersMass, massOfUser);});