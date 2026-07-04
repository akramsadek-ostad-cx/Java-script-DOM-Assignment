const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

const result = document.getElementById("result");

function getNumbers(){

    const firstNumber = Number(number1.value);
    const secondNumber = Number(number2.value);

    return {
        firstNumber,
        secondNumber
    };

}

addBtn.addEventListener("click", function(){

    const { firstNumber, secondNumber } = getNumbers();

    result.textContent = `Result: ${firstNumber + secondNumber}`;

});

subtractBtn.addEventListener("click", function(){

    const { firstNumber, secondNumber } = getNumbers();

    result.textContent = `Result: ${firstNumber - secondNumber}`;

});

multiplyBtn.addEventListener("click", function(){

    const { firstNumber, secondNumber } = getNumbers();

    result.textContent = `Result: ${firstNumber * secondNumber}`;

});

divideBtn.addEventListener("click", function(){

    const { firstNumber, secondNumber } = getNumbers();

    if(secondNumber === 0){

        result.textContent = "Result: Cannot divide by zero";

    }else{

        result.textContent = `Result: ${firstNumber / secondNumber}`;

    }

});