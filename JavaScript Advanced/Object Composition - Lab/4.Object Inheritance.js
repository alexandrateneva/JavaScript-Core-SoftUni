function createCars(commands) {
    let result = new Map();

    let carProcessor = {
        create: function ([name, action, parent]) {
            parent = parent ? result.get(parent) : null;
            let car = Object.create(parent);
            result.set(name, car);
        },

        set: function ([name, key, value]) {
            let car = result.get(name);
            car[key] = value;
        },

        print: function ([name]) {
            let car = result.get(name);
            let properties = [];
            for (let prop in car) {
                properties.push(prop);
            }

            console.log(properties.map(e => `${e}:${car[e]}`).join(', '));
        }
    };

    for (let cmd of commands) {
        let args = cmd.split(' ');
        let cmdName = args.shift();
        carProcessor[cmdName](args);
    }
}

createCars(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);