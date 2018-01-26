function getDiagonalSum(matrix) {
    let firstSum = 0;
    let secondSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrix.length - 1 - row];
    }
    console.log(firstSum + ' ' + secondSum);
}

getDiagonalSum([[20, 40],
    [10, 60]]);
getDiagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);