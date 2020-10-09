let counterValue = 0;

const decrementBtn = document.querySelector("button[data-action='decrement']");
const handleDecrementBtnClick = () => {
counterValue -= 1;
console.log(`Значение счетчика: ${counterValue}`);  
 document.querySelector("#value").textContent = counterValue;
}

decrementBtn.addEventListener('click', handleDecrementBtnClick);

const incrementBtn = document.querySelector("button[data-action='increment']");
const handleIncrementBtnClick = () => {
 counterValue += 1;
 console.log(`Значение счетчика: ${counterValue}`);  
 document.querySelector("#value").textContent = counterValue;
}

incrementBtn.addEventListener('click', handleIncrementBtnClick);counterValue -= 1;



/*let counterValue = 0;
counterValue += document.querySelector("#value").textContent;
console.log(`Значение счетчика: ${counterValue}`);

const decrementBtn = document.querySelector("button[data-action='decrement']");
const handleDecrementBtnClick = () => console.log((Number(counterValue) += 1));
console.log(`Значение счетчика: ${counterValue}`);
decrementBtn.addEventListener('click', handleDecrementBtnClick);

const incrementBtn = document.querySelector("button[data-action='increment']");
const handleIncrementBtnClick = () => console.log(`Для примера - клик`);
console.log(`Значение счетчика: ${counterValue}`);
incrementBtn.addEventListener('click', handleIncrementBtnClick);*/



/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика
 на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/
