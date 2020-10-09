const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsList = ingredients.map(ingredient => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = ingredient;
    return listItemRef;
})


document.querySelector('#ingredients').append(...ingredientsList);

/*Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().*/