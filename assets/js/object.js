'use strict';
//const userResult = document.getElementById('#userResult');
let usersArray = [];
const selectUser = document.getElementById('selectUser');
// Функция-конструктор которая позволит создавать объекты User
function User(name, secName, lastName, login, pass, age, userHeight) {
  this.userName = name;
  this.secName = secName;
  this.lastName = lastName;
  this.login = login;
  this.pass = pass;
  this.age = age;
  this.userHeight = userHeight;

}

// Функция, для добавления объетов
function addUser() {
  let isNotNull = userName.value && secName.value && lastName.value && login.value && pass.value && age.value && Number(userHeight.value);
  // Если поля не пустые
  if (isNotNull) {
    let newUser = new User(
      userName.value,
      secName.value,
      lastName.value,
      login.value,
      pass.value,
      Number(age.value),
      Number(userHeight.value)
    );

    let id = usersArray.length;
    usersArray.push(newUser);

    let opt = document.createElement("option");

    opt.value = String(id);
    opt.text = newUser.userName;
    selectUser.appendChild(opt);

    userName.value = '';
    secName.value = '';
    lastName.value = '';
    login.value = '',
      pass.value = '';
    age.value = '';
    userHeight.value = '';
  } else {
    // Если не все поля заполнены - вызываем окно alert
    alert("Введите значения!");
  }

}

function cubSize() {

  // Получаем идентификатор выбранного элемента в селекторе
  let id = selectCub.value;
  // Проверяем что элемент селектора был выбран
  if (id) {
    // индентификатор соответсвует индексу в массиве
    // поэтому получаем нужный объект
    // и вызываем его метод для посчета объема
    let sizeResult = cubsArray[id].getCubSize();
    // выведем в элемент с id -- cubResult полученый результат
    cubResult.innerHTML = sizeResult;
  } else {
    // в случае если в селекторе не выбран элемент
    // выводим окно предупреждения alert
    alert("Не выбран куб!");
  }
}

// Функция подсчета среднего роста
function midleHeight() {
  let summ = 0;
  let result;
  if (usersArray.length > 1) {
    for (let i = 0; i < usersArray.length; i++) {

      summ += Number(usersArray[i].userHeight);
      console.log(usersArray[i].userHeight);
      console.log('summ= ' + summ);
    }
    result = summ / usersArray.length;
  }
  heightOfUsers.innerHTML = result;
}
// Функция подсчета среднего возраста  
function midleAge() {
  let summ = 0;
  let result;
  if (usersArray.length > 1) {
    for (let i = 0; i < usersArray.length; i++) {

      summ += Number(usersArray[i].age);
      console.log(usersArray[i].age);
      console.log('summ= ' + summ);
    }
    result = summ / usersArray.length;
  }
  ageOfUser.innerHTML = result;
}
// Функция вывода кол-ва пользователей
function countUsers() {
  let x = usersArray.length;
  countOfUsers.innerHTML = x;
}

function myFunc() {
  userResult1.innerHTML = usersArray[selectUser.value].age;
  console.log(selectUser.value);
  usersArray[selectUser.value].age++;
  userResult2.innerHTML = usersArray[selectUser.value].age;
}