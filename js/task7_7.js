const fontSizeRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
const fontSizeChange = function () {
    console.log (fontSizeRange.value);
    spanText.style.fonSize = `${fontSizeRange.value}px`;
};
spanText.style.fonSize = `${fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", fontSizeChange);



/*Напиши скрипт, который реагирует на изменение значения
 input#font-size-control (событие input) и изменяет инлайн-стиль span#text 
 обновляя свойство font-size. В результате при перетаскивании ползунка 
 будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>*/