function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error("Cannot instantiate an abstract class.");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery === false) {
                throw new TypeError("It's not instance of Battery class.");
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace, monitor);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (value instanceof Keyboard === false) {
                throw new TypeError("It's not instance of Keyboard class.");
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value instanceof Monitor === false) {
                throw new TypeError("It's not instance of Monitor class.");
            }
            this._monitor = value;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

module.exports = {createComputerHierarchy}; //export for problem 7.Mixins

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);

let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", "pesho");
let desktop1 = new Desktop("JAR Computers", 3.3, 8, 1, 1, monitor);
let desctop2 = new Desktop("JAR Computers", 3.3, 8, 1, keyboard, "monitor");