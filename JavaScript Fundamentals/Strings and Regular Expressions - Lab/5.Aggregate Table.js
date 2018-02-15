function aggregateTable(input) {
    let towns = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(['|']).filter(e => e !== '');
        towns.push(info[0].trim());
        sum += Number(info[1].trim());
    }
    console.log(towns.join(', '));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);