const inputValidation = document.querySelector("#validation-input");

inputValidation.addEventListener("focus", () => {
    inputValidation.classList = "";
});

inputValidation.addEventListener("blur", oninputValidation);

function oninputValidation() {
  if (inputValidation.value.length !== Number(inputValidation.dataset.length)) {
    inputValidation.classList.add("invalid");
  } else {
    inputValidation.classList.add("valid");
  }
}

/*const validationInput = document.querySelector("#validation-input");
console.log(inputValidation);

inputValidation.addEventListener("focus", () => {
    inputValidation.classList = "";
});

inputValidation.addEventListener("blur", oninputValidation);

function oninputValidation() {
    if (inputValidation.value.length !== Number(inputValidation.data - length.value)) {
        inputValidation.classList.add("invalid");
    } else {
        inputValidation.classList.add("valid");
    }
}


/*const validationInput = document.querySelector("validation-input");
const validationInputLenght = function () {
    if (
        validationInput.value.length < Number(validationInput.dataset.length)
        validationInput.value.length > Number(validationInput.dataset.length)
    ) {
        validationInput.classList.add("invalid");
        //console.log ("Введено неверное количество символов - надо 6");
    } else {
        //validationInput.classList("invalid");
        validationInput.classList.add("valid");
        //console.log ("Введено верное количество символов");
    }
}; 

validationInput.addEventListener("focus", () => {
    validationInput.classList = "";
});

validationInput.addEventListener ("blur", validationInputLength);*/


/*Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}*/