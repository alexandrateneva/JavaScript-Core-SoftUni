function printTriangleOfDollars(num) {
    for (let row = 0; row < num; row++) {
        let line = '';
        for (let col = 0; col <= row; col++) {
            line += '$';
        }
        console.log(line);
    }
}

printTriangleOfDollars(4);
printTriangleOfDollars(5);