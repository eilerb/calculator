function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === 'add') {
        add(a, b);
    } else if (operator === 'subtract') {
        subtract(a, b);
    } else if (operator === 'multiply') {
        multiply(a, b);
    } else if (operator === 'divide') {
        divide(a, b);
    }
}

const display = document.querySelector('.display');
let displayText = '';
//console.log(display.textContent);
//display.textContent = '1';
//console.log(display.textContent);
console.log(displayText);

// Number button functionality
const numberButtons = document.querySelectorAll('.number');
numberButtonsArray = [...numberButtons];
let numberLength = 0;
let firstNumber = 0;
//console.log(numberButtonsArray);
numberButtonsArray.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        if (numberLength < 10) {
            display.textContent += numberButton.textContent;
            numberLength++;
            console.log(numberLength);
        }

        displayText = display.textContent;
        firstNumber = ~~displayText;
        //console.log(displayText);
        //console.log(firstNumber);
    })
})


const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    display.textContent = '';
    numberLength = display.textContent.length;
    displayText = display.textContent;
    firstNumber = ~~displayText;
    //console.log(numberLength);
    //console.log(firstNumber);
});

const plusMinusBtn = document.querySelector('.change-sign');
let changed = 'plus';
plusMinusBtn.addEventListener('click', minusSign);

function minusSign() {
    display.textContent = `-${displayText}`;
    displayText = display.textContent;
    firstNumber = ~~displayText;
    plusMinusBtn.removeEventListener('click', minusSign)
    plusMinusBtn.addEventListener('click', removeMinusSign);
}

function removeMinusSign() {
    display.textContent = displayText.replace('-', '');
    displayText = display.textContent;
    firstNumber = ~~displayText;
    plusMinusBtn.removeEventListener('click', removeMinusSign);
    plusMinusBtn.addEventListener('click', minusSign);
}

const percentBtn = document.querySelector('.percent');
percentBtn.addEventListener('click', () => {
    if ((display.textContent.length > 0)) {
        display.textContent = `${displayText}%`;
    }
});
