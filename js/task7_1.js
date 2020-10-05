/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и 
выведет в консоль текст заголовка элемента (тега h2) и количество элементов 
в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4*/


const itemEl = document.querySelectorAll("h2");
console.log("В списке", itemEl.length, "категории");

const itemNameEl = itemEl.forEach((element) =>
console.log("Категория:", element.textContent)
);

/*element.firstElementChild.textContent;
element.lastElementChild.children.length;*/
console.log (
    "Количество элементов:",
    el.querySelectorAll('element').length
);


/*
console.log(
    "Количество элементов:",
    itemNameEl.lastElementChild.children.length);*/