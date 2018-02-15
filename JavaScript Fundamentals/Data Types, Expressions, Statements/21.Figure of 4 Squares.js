function printFigureOf4Squares(num) {
    let figure = "";
    let lines = num;
    let cols = 2 * num - 1;
    if (num % 2 === 0) {
        lines = num - 1;
    }
    for (let line = 0; line < lines; line++) {
        let middle = parseInt(lines / 2);
        let half = (cols - 3) / 2;

        if (line === 0 || line === middle || line === lines - 1) {
            figure += `+${"-".repeat(half)}+${"-".repeat(half)}+\n`;
        }
        else {
            figure += `|${" ".repeat(half)}|${" ".repeat(half)}|\n`;
        }
    }
    console.log(figure);
}

printFigureOf4Squares(4);
printFigureOf4Squares(5);
printFigureOf4Squares(7);
