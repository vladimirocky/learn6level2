// init
/**
 * Массив, для хранения объектов Cubik
 * @type {*[Cubik]}
 */
 let cubsArray = [];

 /**
  * Функция-конструктор
  * для объектов типа Cubik
  * @param x
  * @param y
  * @param z
  * @param name
  * @constructor
  * @method возвращает объем "куба"
  */
 function Cubik (x,y,z, name='no name') {
     this.length = x;
     this.height = y;
     this.width = z;
     this.name = name;
     this.getCubSize = function () {
         return this.length * this.height * this.width
     }
 }
 
 /**
  * Функция, для добавления объетов типа Cubik в массив cubsArray
  * Обновляет элементы селектора с id -- selectCub
  */
 function addCub(){
     // это значит, что если хотябы одно поле пустое
     // в isNotNull запишется пустое значение
     let isNotNull = Number(cubX.value) && Number(cubY.value) && Number(cubZ.value) && cubName.value;
 
     // проверяем что нет ни одного пустого поля инпут
     if (isNotNull) {
         // создаем объект типа Cubik
         let newCub = new Cubik(
             cubX.value,
             cubY.value,
             cubZ.value,
             cubName.value
         );
         // будем шспользовать id объета из массива
         // для дочерних элементов селектора
         let id = cubsArray.length;
         // добавляем новый элемент в массив
         cubsArray.push(newCub);
 
         // создаем дочерний элемент селектора -- строка выпадающего списка
         let opt = document.createElement("option");
         // value позволит в дальнейшем идентифицировать выбранный элемент селектора
         // в данном длучае будет соответсвовать индексу в массиве
         opt.value = String(id);
         // текст - то что увидит пользователь в выпадающем списке
         opt.text = newCub.name;
         // теперь к элементу документа мы добавили новый дочерний элемент
         selectCub.appendChild(opt);
 
         // сотрем ненужный текст в input-ах в случае успеха
         cubX.value = '';
         cubY.value = '';
         cubZ.value = '', cubName.value = '';
     }
     else {
         // если не все поля заполнены - вызываем окно alert
         alert("Введите значения! Убедитесь что x, y, z это числа!")
     }
 
 }
 /**
  * Функция вывода в html объема "куба"
  */
 function cubSize(){
 
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
     }
     else {
         // в случае если в селекторе не выбран элемент
         // выводим окно предупреждения alert
         alert("Не выбран куб!");
     }
 }

