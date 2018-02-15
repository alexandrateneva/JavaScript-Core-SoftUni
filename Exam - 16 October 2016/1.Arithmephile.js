function calculateBiggestNum(input) {
    let numbers = input.map(e => Number(e));
    let biggestNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        if (0 <= currentNumber && currentNumber < 10) {
            let startIndex = i + 1;
            let endIndex = startIndex + currentNumber;
            let currentNumbers = numbers
                .slice(startIndex, endIndex);
            let currentSum = currentNumbers
                .reduce((a, b) => a * b, 1);
            if (biggestNum < currentSum) {
                biggestNum = currentSum;
            }
        }
    }
    console.log(biggestNum);
}

calculateBiggestNum(['10', '20', '2', '30', '44', '3', '56', '20', '24']);
calculateBiggestNum(['100', '200', '2', '3', '2', '3', '2', '1', '1']);
calculateBiggestNum(['18', '42', '19', '36', '1', '-297', '38', '100', '9', '-249', '-170', '-18', '-208', '-11', '-87', '-90', '-286', '-27']);