function matchMultiplication(input) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;
    input = input.replace(regex, (match, num1, num2) => Number(num1) * Number(num2));

    console.log(input);
}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');