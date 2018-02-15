function printOrbit([h, w, x, y]) {
    let matrix = [];
    for (let i = 0; i < h; i++) {
        matrix[i] = new Array(w);
    }

    for (let row = 0; row < h; row++) {
        for (let col = 0; col < w; col++) {
            matrix[row][col] = Math.max(Math.abs(x - row), Math.abs(y - col)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

printOrbit([4, 4, 0, 0]);
printOrbit([5, 5, 2, 2]);
printOrbit([3, 3, 2, 2]);