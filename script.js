let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = null;
    previousInput = '';
    display.innerText = '0';
}

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    display.innerText = currentInput;
}

function calculateResult() {
    if (operator === null || currentInput === '') return;

    let result;
    const current = parseFloat(currentInput);
    const previous = parseFloat(previousInput);

    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            if (current === 0) {
                display.innerText = 'Error';
                currentInput = '';
                operator = null;
                previousInput = '';
                return;
            }
            result = previous / current;
            break;
        default:
            return;
    }

    display.innerText = result;
    currentInput = result;
    operator = null;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (operator !== null) calculateResult();

    operator = op;
    previousInput = currentInput;
    currentInput = '';
}
