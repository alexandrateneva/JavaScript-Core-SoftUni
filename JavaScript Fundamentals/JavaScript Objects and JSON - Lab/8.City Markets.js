function getCityMarketsStatistics(input) {
    let result = new Map();
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' -> ');
        let city = tokens[0];
        let product = tokens[1];
        let sum = tokens[2].split(' : ').reduce((a, b) => a * b);

        if (!result.has(city)) {
            result.set(city, new Map());
        }

        if (!result.get(city).has(product)) {
            result.get(city).set(product, 0);
        }

        let oldSum = result.get(city).get(product);
        result.get(city).set(product, oldSum + sum);
    }

    for (let [town, products] of result) {
        console.log(`Town - ${town}`);
        for (let [product, sales] of products) {
            console.log(`$$$${product} : ${sales}`);
        }
    }
}

getCityMarketsStatistics(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 5',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Оranges -> 200000 : 2.5',
    'Montana -> Strawberries -> 20000 : 4.2',
    'Montana -> Cherries -> 1000 : 3.3']);