function calculatePopulationsInTowns(input) {
    let result = new Map();
    for (let i = 0; i < input.length; i++) {
        let town = input[i].split(' <-> ');
        if (!result.has(town[0])) {
            result.set(town[0], 0);
        }
        result.set(town[0], result.get(town[0]) + Number(town[1]));
    }
    result.forEach((a, b) => console.log(`${b} : ${a}`));
}

calculatePopulationsInTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000',]);