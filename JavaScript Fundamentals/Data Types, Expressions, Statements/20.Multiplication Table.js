function printMultiplicationTable(num) {
    let result = '';
    result += "<table border=\"1\">\n";
    for (let row = 0; row <= num; row++) {
        result += "<tr>";
        for (let col = 0; col <= num; col++) {
            let product = row * col;
            if (product === 0) {
                let sum = row + col;
                if (sum === 0) {
                    result += `<th>${'x'}</th>`;
                }
                else {
                    result += `<th>${sum}</th>`;
                }

            }
            else {
                result += `<td>${product}</td>`;
            }

        }
        result += "</tr>\n";
    }
    result += "</table>";
    return result;
}

console.log(printMultiplicationTable(5));