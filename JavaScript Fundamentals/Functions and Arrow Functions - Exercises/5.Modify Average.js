function modifyNumberAverage(num) {
    let numArr = num.toString().split('').map(Number);
    while (getAverage(numArr) <= 5) {
        numArr[numArr.length] = 9;
    }

    function getAverage(numArr) {
        let average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
        return average(numArr);
    }

    console.log(numArr.join(''));
}

modifyNumberAverage(101);
modifyNumberAverage(5835);