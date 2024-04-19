let operation = '';
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('resultado').value = currentInput;
}


function operate(operator) {
    if (currentInput) {
        operation += currentInput + ' ' + operator + ' ';
        currentInput = '';

        document.getElementById('resultado').value = operation;
    }
}


function calculate() {
    if (operation) {
        operation += currentInput;
        let result = eval(operation);

        document.getElementById('resultado').value = result;

        operate = '';
        currentInput = result;
    }
}


function clearResult() {
    operation = '';
    currentInput = '';

    document.getElementById('resultado').value = '';
}
