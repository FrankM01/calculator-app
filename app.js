
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;


let waitingForSecondOperand = false;
let currentInput = '0';


function addition(n1, n2) {
    return n1 + n2
}
function subtraction(n1, n2) {
    return n1 - n2
}
function multiplication(n1, n2) {
    return n1 * n2
}
function division(n1, n2) {
    return n1 / n2
}


function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return addition(firstNumber, secondNumber);
        case '-':
            return subtraction(firstNumber, secondNumber);
        case '*':
            return multiplication(firstNumber, secondNumber);
        case '/':
            return division(firstNumber, secondNumber);
        default:
            return null;
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    if(currentInput.length > 7){
        display.textContent = 'TooLong'
    }else{

        display.textContent = currentInput;
    }
}

function inputDigit(digit) {
    if (waitingForSecondOperand) {
        currentInput = digit.toString();
        waitingForSecondOperand = false;
    } else {
        currentInput = currentInput === '0' ? digit.toString() : currentInput + digit.toString();
    }
    updateDisplay()
}

function inputOperator(operator) { 
    if(currentInput && waitingForSecondOperand){
        currentOperator = operator;
        return;
    }
    if(firstNumber === null){
        firstNumber = parseFloat(currentInput);
    }else if(currentOperator){
        secondNumber = parseFloat(currentInput);
        firstNumber = operate(currentOperator, firstNumber, secondNumber);
        currentInput = firstNumber.toString(); 
        secondNumber = null;
        updateDisplay();
    }
    currentOperator = operator;
    waitingForSecondOperand = true;
}

function calculateResult(){
    if(currentOperator && !waitingForSecondOperand){
        secondNumber = parseFloat(currentInput);
        currentInput = String(operate(currentOperator, firstNumber, secondNumber));
        firstNumber = null;
        secondNumber = null;
        currentOperator = null;
        waitingForSecondOperand = false;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}



document.getElementById('btn-7').addEventListener('click', function () {
    inputDigit(7);
});
document.getElementById('btn-8').addEventListener('click', function () {
    inputDigit(8);
});
document.getElementById('btn-9').addEventListener('click', function () {
    inputDigit(9);
});
document.getElementById('btn-divide').addEventListener('click', function () {
    inputOperator('/');
});
document.getElementById('btn-4').addEventListener('click', function () {
    inputDigit(4);
});
document.getElementById('btn-5').addEventListener('click', function () {
    inputDigit(5);
});
document.getElementById('btn-6').addEventListener('click', function () {
    inputDigit(6);
});
document.getElementById('btn-multiply').addEventListener('click', function () {
    inputOperator('*');
});
document.getElementById('btn-1').addEventListener('click', function () {
    inputDigit(1);
});
document.getElementById('btn-2').addEventListener('click', function () {
    inputDigit(2);
});
document.getElementById('btn-3').addEventListener('click', function () {
    inputDigit(3);
});
document.getElementById('btn-subtract').addEventListener('click', function () {
    inputOperator('-');
});
document.getElementById('btn-0').addEventListener('click', function () {
    inputDigit(0);
});
document.getElementById('btn-equals').addEventListener('click', function () {
    calculateResult();
});
document.getElementById('btn-add').addEventListener('click', function () {
    inputOperator('+');
});
document.getElementById('btn-clear').addEventListener('click', function () {
    clearDisplay();
});


