function calculateBinaryLogarithm(numbers) {
    for (let num of numbers) {
        console.log(Math.log2(num));
    }
}

calculateBinaryLogarithm([1024, 1048576, 256, 1, 2]);