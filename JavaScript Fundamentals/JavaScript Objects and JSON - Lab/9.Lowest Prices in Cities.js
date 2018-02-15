function getLowestPriceInCities(input) {
    let result = new Map();
    for (let i = 0; i < input.length; i++) {
        let [city, product, price] = input[i].split(" | ");
        if (!result.has(product)) {
            result.set(product, new Map());
        }

        result.get(product).set(city, Number(price));
    }

    for (let [product, townsPrice] of result) {

        //First way - reduce()
        let [town, price] = [...townsPrice].reduce(function (a, b) {
            if (a[1] > b[1]) return b;
            return a;
        });
        console.log(`${product} -> ${price} (${town})`);

        //Second way - sort()
        let mapAsc = [...townsPrice].sort((a, b) => a[1] - b[1]);
        for (let townPrice of mapAsc) {
            let [town, price] = townPrice;
            console.log(`${product} -> ${price} (${town})`);
            break;
        }
    }
}

getLowestPriceInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sofia | Peach | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);