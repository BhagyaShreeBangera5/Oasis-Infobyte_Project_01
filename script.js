let expressionDisplay = document.getElementById("expression");
let resultDisplay = document.getElementById("result");
let expression = "";

function append(value) {
    expression += value;
    expressionDisplay.textContent = expression;
}

function clearAll() {
    expression = "";
    expressionDisplay.textContent = "";
    resultDisplay.textContent = "";
}

function deleteLast() {
    expression = expression.slice(0, -1);
    expressionDisplay.textContent = expression;
}

function calculate() {
    try {
        let evalResult = eval(expression);
        resultDisplay.textContent = evalResult;
    } catch {
        resultDisplay.textContent = "Error";
    }
}
