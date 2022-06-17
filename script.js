function add(a, b) {
    return parseFloat((a + b).toFixed(8));
}

function subtract(a, b) {
    return parseFloat((a - b).toFixed(8));
}

function multiply(a, b) {
    return parseFloat((a * b).toFixed(8));
}

function divide(a, b) {
    if (b === 0) {
        alert('ERROR! Cannot divide by 0');
        return;
    }
    return parseFloat((a / b).toFixed(8));
}

function operate(operator, a, b) {
    if (operator === 'add') {
        return add(a, b);
    } else if (operator === 'subtract') {
        return subtract(a, b);
    } else if (operator === 'multiply') {
        return multiply(a, b);
    } else if (operator === 'divide') {
        return divide(a, b);
    }
}

const display = document.querySelector('.display');
let displayText = '';

const numberButtons = document.querySelectorAll('.number');
numberButtonsArray = [...numberButtons];
let numberLength = 0;
let displayNumber = 0;

numberButtonsArray.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        if (numberLength < 10) {
            display.textContent += numberButton.textContent;
            numberLength++;
            displayText = display.textContent;
            displayNumber = Number(displayText);
        }
    })
})


const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    display.textContent = '';
    firstNumberObj.number = undefined;
    firstNumberObj.operator = undefined;
    secondNumberObj.number = undefined;
    numberUpdate();
});

const plusMinusBtn = document.querySelector('.change-sign');
plusMinusBtn.addEventListener('click', minusSign);

function minusSign() {
    display.textContent = `-${displayText}`;
    numberUpdate();
    plusMinusBtn.removeEventListener('click', minusSign)
    plusMinusBtn.addEventListener('click', removeMinusSign);
}

function removeMinusSign() {
    display.textContent = displayText.replace('-', '');
    numberUpdate();
    plusMinusBtn.removeEventListener('click', removeMinusSign);
    plusMinusBtn.addEventListener('click', minusSign);
}

const backspaceBtn = document.querySelector('.backspace');
backspaceBtn.addEventListener('click', () => {
    display.textContent = displayText.slice(0, displayText.length - 1);
    numberUpdate();
});

const pointBtn = document.querySelector('.point');
pointBtn.addEventListener('click', () => {
    if (displayText.indexOf('.') === -1 && numberLength < 9) {
        display.textContent = `${displayText}.`;
        numberUpdate();
    }
});

function numberUpdate() {
    displayText = display.textContent;
    displayNumber = Number(displayText);
    numberLength = display.textContent.length;
}

const firstNumberObj = {};
const secondNumberObj = {};

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {
    operation('divide');
    numberUpdate();
});

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => {
    operation('multiply');
    numberUpdate();
});

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {
    operation('subtract');
    numberUpdate();
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    operation('add');
    numberUpdate();
});

function operation(operator) {
    firstNumberObj.number = displayNumber;
    firstNumberObj.operator = operator;
    display.textContent = '';
}

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
    secondNumberObj.number = displayNumber;
    let operator = firstNumberObj.operator
    let firstNumber = firstNumberObj.number;
    let secondNumber = secondNumberObj.number;
    let result = operate(operator, Number(firstNumber), Number(secondNumber));
    displayText = result.toString();
    display.textContent = displayText;
    displayNumber = Number(displayText);
    numberLength = display.textContent.length;
});
