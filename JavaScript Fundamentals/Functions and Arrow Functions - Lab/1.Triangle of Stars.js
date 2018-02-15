function printTriangleOfStars(num) {
    let figure = "";
    for (let row = 0; row < num; row++) {
        for (let col = 0; col < row + 1; col++) {
            figure += "*";
        }
        figure += "\n";
    }
    for (let row = 0; row < num; row++) {
        for (let col = row + 1; col < num; col++) {
            figure += "*";
        }
        figure += "\n";
    }
    console.log(figure);
}

printTriangleOfStars(5);