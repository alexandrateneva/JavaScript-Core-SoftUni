function diagonalAttack(input) {
    let matrix = input.map(e => e.split(' ')).map(e => e.map(Number));
    let sum = haveEqualDiagonalSum(matrix);
    if (sum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (col !== row && col !== matrix.length - 1 - row) {
                    matrix[row][col] = sum;
                }
            }
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));

    function haveEqualDiagonalSum(matrix) {
        let firstSum = 0;
        let secondSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            firstSum += matrix[row][row];
            secondSum += matrix[row][matrix.length - 1 - row];
        }
        if (firstSum === secondSum) {
            return firstSum;
        }
        else {
            return false;
        }
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);