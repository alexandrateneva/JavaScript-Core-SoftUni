class Entity {
    constructor(name) {
        if (new.target === Entity) {
            throw new Error('Cannot construct Entity instance directly.')
        }
        this.name = name;
    }
}

module.exports = Entity;