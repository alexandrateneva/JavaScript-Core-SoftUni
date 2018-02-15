function calculate(a, b, op) {
    switch (op) {
        case "+":
            return sum();
        case "-":
            return subtract();
        case "/":
            return divide();
        case "*":
            return multiply();
    }

    function sum() {
        return a + b;
    }

    function subtract() {
        return a - b;
    }

    function multiply() {
        return a * b;
    }

    function divide() {
        return a / b;
    }
}

console.log(calculate(2, 4, '+'));
console.log(calculate(3, 3, '/'));
console.log(calculate(18, -1, '*'));