const [ input, buttonRender, buttonDestroy ] = document.querySelector("#controls").children;

const container = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div')
    const sideSize = 30 + 10 * (i + 1);
    div.style.height = `${sideSize}px`;
    div.style.width = `${sideSize}px`;
    div.style.backgroundColor = "red"

    container.append(div)
  }
}

function destroyBoxes() {
  container.innerHTML = '';
}

buttonRender.addEventListener("click", () => { 
  createBoxes(input.value);
});

buttonDestroy.addEventListener("click", () => { 
  destroyBoxes();
});



/*Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, 
коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/