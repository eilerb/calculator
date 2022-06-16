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
    return a/b;
}

function operate(operator, a, b) {
    if (operator === 'add') {
        add(a, b);
    } else if (operator === 'subtract'){
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
const buttons = document.querySelectorAll('.number');
buttonsArray = [...buttons];
let numberLength = 0;
console.log(buttonsArray);
buttonsArray.forEach(button => {
    button.addEventListener('click', () => {
        if (numberLength < 10) {
            display.textContent += button.textContent;
        }
        
        numberLength++;
        displayText = display.textContent;
        //console.log(displayText);
    })
})


// Clear button
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    displayText.slice(displayText.length-1);
    console.log(displayText);
    display.textContent = displayText;
});
