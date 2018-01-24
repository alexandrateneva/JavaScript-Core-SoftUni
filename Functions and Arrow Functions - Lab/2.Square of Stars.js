function printSquareOfStars(num = 5) {
    let figure = "";
    for (let row = 0; row < num; row++) {
        figure += "*";
        for (let col = 1; col < num; col++) {
            figure += " *";
        }
        figure += "\n";
    }

    console.log(figure);
}

printSquareOfStars();