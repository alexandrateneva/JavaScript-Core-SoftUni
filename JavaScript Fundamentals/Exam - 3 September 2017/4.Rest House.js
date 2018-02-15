function bookingInRestHouse(rooms, guests) {
    let occupiedRooms = new Array();
    rooms.map(e => e.guests = new Array());
    let doubleRooms = rooms.filter(r => r.type === 'double-bedded');
    let tripleRooms = rooms.filter(r => r.type === 'triple');

    for (let i = 0; i < guests.length; i++) {
        let currentGuests = guests[i];
        let firstGuest = currentGuests['first'];
        let secondGuest = currentGuests['second'];
        if (firstGuest['gender'] !== secondGuest['gender']) {
            let firstDoubleRoom = doubleRooms.shift();
            if (firstDoubleRoom !== undefined) {
                firstDoubleRoom.guests.push(firstGuest);
                firstDoubleRoom.guests.push(secondGuest);
                occupiedRooms.push(firstDoubleRoom);
            }
        }
        else {
            if (tripleRooms.length > 0) {
                let roomIndex = 0;
                let firstTripleRoom = tripleRooms[roomIndex];
                let guests = [firstGuest, secondGuest];
                while (guests.length > 0 && roomIndex < tripleRooms.length) {
                    let freeBeds = 3 - firstTripleRoom.guests.length;
                    let genderOfCurrentRoom = (firstTripleRoom.guests.length > 0) ? firstTripleRoom.guests[0]['gender'] : 'free';
                    if (freeBeds === 3) {
                        firstTripleRoom.guests.push(guests.shift());
                    }
                    else if (freeBeds === 2) {
                        if (genderOfCurrentRoom === guests[0]['gender']) {
                            firstTripleRoom.guests.push(guests.shift());
                        }
                        else {
                            roomIndex++;
                        }
                    }
                    else {
                        if (genderOfCurrentRoom === guests[0]['gender']) {
                            firstTripleRoom.guests.push(guests.shift());
                            tripleRooms.splice(roomIndex, 1);
                            occupiedRooms.push(firstTripleRoom);
                        }
                        else {
                            roomIndex++
                        }
                    }
                    firstTripleRoom = tripleRooms[roomIndex];
                }
            }
        }
    }
    let countOfAllAccommodatedGuests = 0;
    let orderedRooms = rooms.sort((a, b) => {              //-> ascending alphanumeric order
        if (a.number < b.number) return -1;
        if (a.number > b.number) return 1;
        return 0;
    });
    for (let room of orderedRooms) {
        console.log(`Room number: ${room.number}`);
        let orderedGuests = room.guests.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        for (let guest of orderedGuests) {                                //->ascending alphabetical order
            console.log(`--Guest Name: ${guest.name}`);
            console.log(`--Guest Age: ${guest.age}`);
            countOfAllAccommodatedGuests++;
        }
        let allBeds = (room.type === 'double-bedded' ? 2 : 3);
        console.log(`Empty beds in the room: ${allBeds - room.guests.length}`);
    }
    console.log(`Guests moved to the tea house: ${guests.length * 2 - countOfAllAccommodatedGuests}`);
}

bookingInRestHouse([{number: '206', type: 'double-bedded'},
        {number: '311', type: 'triple'},
        {number: '320', type: 'triple'}],
    [{
        first: {name: 'Tanya Popova', gender: 'female', age: 24},
        second: {name: 'Miglena Yovcheva', gender: 'female', age: 23}
    },
        {
            first: {name: 'Martin Ivanov', gender: 'male', age: 24},
            second: {name: 'Georgi Petrov', gender: 'male', age: 23}
        },
        {
            first: {name: 'Katerina Stefanova', gender: 'female', age: 23},
            second: {name: 'Angel Nachev', gender: 'male', age: 22}
        },
        {
            first: {name: 'Tatyana Germanova', gender: 'female', age: 23},
            second: {name: 'Boryana Baeva', gender: 'female', age: 22}
        },
        {
            first: {name: 'Petyr Georgiev', gender: 'male', age: 24},
            second: {name: 'Ivan Stoyanowv', gender: 'male', age: 23}
        }
    ]);

bookingInRestHouse([{number: '101A', type: 'double-bedded'},
        {number: '104', type: 'triple'},
        {number: '101B', type: 'double-bedded'},
        {number: '102', type: 'triple'}],
    [{
        first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
        second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
    },
        {
            first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
            second: {name: 'Jeko Snejev', gender: 'male', age: 18}
        },
        {
            first: {name: 'Pesho Goshov', gender: 'male', age: 20},
            second: {name: 'Gosho Peshov', gender: 'male', age: 18}
        },
        {
            first: {name: 'Conor McGregor', gender: 'male', age: 29},
            second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
        }]);
