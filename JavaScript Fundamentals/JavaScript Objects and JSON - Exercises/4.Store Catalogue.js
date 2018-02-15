function createStoreCatalogue(input) {
    let products = new Map();
    for (let productInfo of input) {
        let [name, price] = productInfo.split(' : ');
        products.set(name, Number(price));
    }
    let lastFirstLetter = '';
    for (let [name, price] of [...products].sort()) {
        let firstLetter = name[0];
        if (firstLetter !== lastFirstLetter) {
            console.log(firstLetter);
        }
        console.log(`  ${name}: ${price}`);
        lastFirstLetter = firstLetter;
    }
}

createStoreCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);