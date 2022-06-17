function add(a, b) {
    return (a + b).toFixed(6);
}

function subtract(a, b) {
    return (a - b).toFixed(6);
}

function multiply(a, b) {
    return (a * b).toFixed(6);
}

function divide(a, b) {
    return (a / b).toFixed(6);
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
//console.log(display.textContent);
//display.textContent = '1';
//console.log(display.textContent);
//console.log(displayText);

// Number button functionality
const numberButtons = document.querySelectorAll('.number');
numberButtonsArray = [...numberButtons];
let numberLength = 0;
let displayNumber = 0;
//console.log(numberButtonsArray);
numberButtonsArray.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        if (numberLength < 10) {
            display.textContent += numberButton.textContent;
            numberLength++;
            //console.log(numberLength);
            displayText = display.textContent;
            displayNumber = ~~displayText;
        }

        
        //console.log(displayText);
        //console.log(displayNumber);
    })
})


const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    display.textContent = '';
    firstNumberObj.number = undefined;
    firstNumberObj.operator = undefined;
    secondNumberObj.number = undefined;
    numberUpdate();
    //console.log(numberLength);
    //console.log(displayNumber);
});

const plusMinusBtn = document.querySelector('.change-sign');
let changed = 'plus';
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
    //if ((display.textContent.length > 0)) {
    display.textContent = displayText.slice(0, displayText.length - 1);
    numberUpdate();
    //}
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
    displayNumber = ~~displayText;
    //console.log(`first number: ${displayNumber}`);
    numberLength = display.textContent.length;
}

const firstNumberObj = {};
const secondNumberObj = {};

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {
    if (firstNumberObj.number === undefined) {
        operation('divide');
    }
    
    //console.log(`fist number -> ${displayNumber}`);
    //console.log(firstNumberObj.number);
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
let result = '';
equalsBtn.addEventListener('click', () => {
    //if (numberLength > 0 && displayText !== '-') {
        secondNumberObj.number = displayNumber;
        console.log(displayNumber);
        let operator = firstNumberObj.operator 
        let firstNumber = firstNumberObj.number;
        console.log(firstNumber);
        let secondNumber = secondNumberObj.number;
        console.log(secondNumber);
        console.log(operator);
        let result = operate(operator, 8, 2);
        //let result = firstNumber / secondNumber;
        console.log(result);
        displayText = result.toString();
        display.textContent = displayText;
        displayNumber = ~~displayText;
        numberLength = display.textContent.length;
    //}
});
