function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly.");
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
            this.element = this.constructor.name.substring(0, this.constructor.name.length - 5);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.allElements = ['Fire', 'Earth', 'Air', 'Water'];
            this.element = 'Water';
        }

        morph() {
            let currentElement = this.allElements.shift();
            this.element = currentElement;
            this.allElements.push(currentElement);
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}

let melons = solve();
let watermelon = new melons.Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

let melolemonmelon = new melons.Melolemonmelon(18.5, "Special Sort");
melolemonmelon.morph();
melolemonmelon.morph();
console.log(melolemonmelon.toString());



