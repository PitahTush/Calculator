let currentInput = "";
let operator = null;
let previousInput = "";

function appendValue(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    const display = document.getElementById("result");
    display.value = value;
}

function performOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") calculateResult();

    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculateResult() {
    if (previousInput === "" || operator === null || currentInput === "") return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay(currentInput);
}

function clearResult() {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay("");
}
