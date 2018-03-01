function getNextFibonacciNumber() {
    let f1 = 0;
    let f2 = 1;
    
    return function () {
        let f3 = f1 + f2;
        [f1, f2] = [f2, f3];
        return f1;
    }
}

let fib = getNextFibonacciNumber();
fib(); // 1
fib(); // 1
fib(); // 2
fib(); // 3
fib(); // 5
fib(); // 8
fib(); //13

