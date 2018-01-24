function aggregateElements(arr) {
    let sum = arr => arr.reduce((a, b) => a + b, 0);
    console.log(sum(arr));

    let sumOfInverseValues = arr => arr.reduce((a, b) => a + 1 / b, 0);
    console.log(sumOfInverseValues(arr));

    let concatenateArr = arr.join("");
    console.log(concatenateArr);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);