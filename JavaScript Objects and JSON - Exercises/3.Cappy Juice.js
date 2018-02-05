function calculateBottlesCount(input) {
    let juices = new Map();
    let bottles = new Map();

    for (let juice of input) {
        let [juiceType, juiceQuantity] = juice.split(' => ');
        if (!juices.has(juiceType)) {
            juices.set(juiceType, 0);
        }
        juices.set(juiceType, juices.get(juiceType) + Number(juiceQuantity));

        let newQuantity = juices.get(juiceType);
        if (newQuantity >= 1000) {
            let currentBottles = parseInt(newQuantity / 1000);
            let quantityLeft = newQuantity % 1000;

            if (!bottles.has(juiceType)) {
                bottles.set(juiceType, 0);
            }
            bottles.set(juiceType, bottles.get(juiceType) + currentBottles);
            juices.set(juiceType, quantityLeft);
        }
    }

    bottles.forEach((v, k) => console.log(`${k} => ${v}`));
}

calculateBottlesCount(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

calculateBottlesCount(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])