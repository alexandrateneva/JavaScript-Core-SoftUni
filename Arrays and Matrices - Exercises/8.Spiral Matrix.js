function printSpiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols);
    }

    let counter = 1;
    let startRow = 0, startCol = 0, endRow = rows - 1, endCol = cols - 1;

    while (startRow <= endRow || startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter++;
        }

        for (let i = startRow + 1; i <= endRow; i++) {
            matrix[i][endCol] = counter++;
        }

        for (let i = endCol - 1; i >= startCol; i--) {
            matrix[endRow][i] = counter++;
        }

        for (let i = endRow - 1; i > startRow; i--) {
            matrix[i][startCol] = counter++;
        }

        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
    return matrix.map(row => row.join(" ")).join("\n");
}

console.log(printSpiralMatrix(5, 5));
console.log(printSpiralMatrix(3, 3));