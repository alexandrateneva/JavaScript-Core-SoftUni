function checkForMagicMatrix(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);

    for (let i = 1; i < matrix.length; i++) {
        if (sum !== matrix[i].reduce((a, b) => a + b, 0)) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[row][col];
        }
        if (sumCol !== sum) {
            return false;
        }
    }

    return true;
}

console.log(checkForMagicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
console.log(checkForMagicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));
console.log(checkForMagicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));
console.log(checkForMagicMatrix([[5, 5, 5]]));
console.log(checkForMagicMatrix([[2, 0, 0],
    [0, 2],
    [0, 0, 2]]));
