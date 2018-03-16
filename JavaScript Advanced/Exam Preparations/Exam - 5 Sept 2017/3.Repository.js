class Repository {
    constructor(entity) {
        this.properties = entity;
        this.data = new Map();
        this._ID = -1;
    }

    get count() {
        return this.data.size;
    }

    get ID() {
        return this._ID;
    }

    add(entity) {
        if (this.isValidEntity(entity)) {
            this._ID++;
            this.data.set(this._ID, entity);
            return this._ID;
        }
    }

    get(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        return this.data.get(id);
    }

    update(id, newEntity) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        else {
            if (this.isValidEntity(newEntity)) {
                this.data.set(id, newEntity);
            }
        }
    }

    del(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        else {
            this.data.delete(id);
        }
    }

    isValidEntity(entity) {
        for (let prop in this.properties) {
            let validPropName = prop;
            let validPropType = this.properties[prop];

            let currentPropName = entity[validPropName];
            if (currentPropName === undefined) {
                throw new Error(`Property ${validPropName} is missing from the entity!`);
            }
            else {
                if (typeof currentPropName !== validPropType) {
                    throw new TypeError(`Property ${validPropName} is of incorrect type!`);
                }
            }
        }
        return true;
    }
}

// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
console.log(repository.add(entity)); // Returns 0
console.log(repository.add(entity)); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
};
repository.add(anotherEntity); // should throw a TypeError
repository.del(-1); // should throw Error for invalid id
