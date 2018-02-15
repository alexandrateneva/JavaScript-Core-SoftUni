function radicalMarketing(input) {
    let people = new Map();
    for (let i = 0; i < input.length; i++) {
        let current = input[i].split('-');
        let person = current[0];
        if (current.length === 1) {
            if (!people.has(person)) {
                people.set(person, {subscribers: new Set(), heSubscribesThem: new Set()});
            }
        }
        else {
            let subscriber = current[0];
            person = current[1];
            if (people.has(person) && people.has(subscriber) && person !== subscriber) {
                people.get(person).subscribers.add(subscriber);
                people.get(subscriber).heSubscribesThem.add(person);
            }
        }
    }

    if (people.size > 0) {
        let orderedPeople = [...people].sort((a, b) => {
            if (a[1].subscribers.size < b[1].subscribers.size) return 1;
            if (a[1].subscribers.size > b[1].subscribers.size) return -1;
            if (a[1].heSubscribesThem.size < b[1].heSubscribesThem.size) return 1;
            if (a[1].heSubscribesThem.size > b[1].heSubscribesThem.size) return -1;
        });

        let name = orderedPeople[0][0];
        console.log(name);
        let counter = 1;
        for (let subscriber of people.get(name).subscribers) {
            console.log(`${counter++}. ${subscriber}`);
        }
    }
}

radicalMarketing(['A', 'B', 'C', 'D', 'A-B', 'B-A', 'C-A', 'D-A', 'A-B', 'A-A']);

radicalMarketing(['J', 'G', 'P', 'R', 'C', 'J-G', 'G-J', 'P-R', 'R-P', 'C-J']);

radicalMarketing(['A', 'B', 'A-B', 'B-B', 'C-B']);