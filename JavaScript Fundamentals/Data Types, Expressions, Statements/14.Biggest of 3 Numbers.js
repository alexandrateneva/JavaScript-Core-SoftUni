function getBiggestOf3NumbersBySort(numbers) {
    numbers.sort(function (a, b) {
        return b - a
    });
    console.log(numbers[0]);
}

function getBiggestOf3NumbersByMathMax(numbers) {
    let firstNum = numbers[0];
    let secondNum = numbers[1];
    let thirdNum = numbers[2];
    console.log(Math.max(firstNum, secondNum, thirdNum));
}

getBiggestOf3NumbersBySort([5, -2, 7]);
getBiggestOf3NumbersBySort([130, 5, 99]);
getBiggestOf3NumbersByMathMax([43, 43.2, 43.1]);
getBiggestOf3NumbersByMathMax([5, 5, 5]);
getBiggestOf3NumbersByMathMax([-10, -20, -30]);