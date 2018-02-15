function townsToJSON(input) {
    let towns = [];
    for (let i = 1; i < input.length; i++) {
        let info = input[i].split('|').filter(e => e !== '').map(e => e.trim());
        let town = {
            Town: info[0],
            Latitude: Number(info[1]),
            Longitude: Number(info[2])
        };
        towns.push(town);
    }
    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);