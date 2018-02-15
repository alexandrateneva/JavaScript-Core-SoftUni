function getElementsAtEvenPosition(arr) {
    let result = arr.filter((n, i) => i % 2 === 0).join(' ');
    return result;
}

console.log(getElementsAtEvenPosition(['20', '30', '40']));
console.log(getElementsAtEvenPosition(['5', '10']));