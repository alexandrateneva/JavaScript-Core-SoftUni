function createCar(requirements) {
    let model = requirements.model;
    let power = requirements.power;
    let color = requirements.color;
    let carriage = requirements.carriage;
    let wheelsize = Math.floor(requirements.wheelsize);

    let car = {
        model: model
    };

    if (power <= 90) {
        car.engine = {power: 90, volume: 1800}
    }
    else if (power > 90 && power <= 120) {
        car.engine = {power: 120, volume: 2400}
    }
    else {
        car.engine = {power: 200, volume: 3500}
    }

    car.carriage = {type: carriage, color: color};

    wheelsize = (wheelsize % 2 === 0) ? Math.floor(wheelsize) - 1 : wheelsize;
    car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    return car;
}

console.log(createCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14.6
}));

console.log(createCar({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));