function checkEqualNeighbors(matrix) {
    let counter = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            let current = matrix[row][col];
            if (matrix[row][col + 1] === current) {
                counter++;
            }
        }
    }

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let current = matrix[row][col];
            if (matrix[row + 1][col] === current) {
                counter++;
            }
        }
    }

    console.log(counter);
}

checkEqualNeighbors([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]);

checkEqualNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);