function calculateSumByTown(input) {
    let towns = {};
    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let income = Number(input[i + 1]);
        if (!towns.hasOwnProperty(town)) {
            towns[`${town}`] = 0;
        }
        towns[`${town}`] += income;
    }
    console.log(JSON.stringify(towns));
}

calculateSumByTown(['Sofia', 20, 'Varna', 3, 'Sofia', 5, 'Varna', 4]);