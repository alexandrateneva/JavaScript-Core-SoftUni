function decodeMessage(input) {
    let rows = Number(input.shift());
    let template = input.splice(0, rows).map(e => e.split(' ').map(se => Number(se)));
    let cols = template[0].length;
    let alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let line = 0; line < input.length; line++) {
        let row = input[line].split(' ').map(se => Number(se));
        for (let col = 0; col < row.length; col++) {
            let templLine = (line < rows) ? line : line % rows;
            let tempCol = (col < cols) ? col : col % cols;
            let currentTempl = template[templLine][tempCol];
            let currentElement = row[col];
            let sum = currentElement + currentTempl;
            let index = (sum > 26) ? sum % 27 : sum;
            result += alphabet[index];
        }
    }
    console.log(result);
}

decodeMessage(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);

decodeMessage(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']);
