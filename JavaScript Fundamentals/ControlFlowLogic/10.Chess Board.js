function printChessBoard(num) {
    let result = "";
    result += "<div class=\"chessboard\">\n";
    for (let row = 0; row < num; row++) {
        result += "<div>\n";
        for (let col = 0; col < num; col++) {
            let color = ((row + col) % 2 === 0) ? "black" : "white";
            result += `<span class=\"${color}\"></span>\n`;
        }
        result += "</div>\n";
    }
    result += "</div>";
    return result;
}

console.log(printChessBoard(3));