let classes = require('./6.Computer').createComputerHierarchy();

function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4)
        };

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        };
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer;
        };

        classToExtend.prototype.isClassy = function () {
            const colors = ['Black', 'Silver'];
            if (this.expectedLife < 3) return false;
            if (this.weight > 3) return false;
            return colors.includes(this.color);
        };
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}

let mixins = createMixins();

let Desktop = classes.Desktop;
let Laptop = classes.Laptop;
let Keyboard = classes.Keyboard;
let Monitor = classes.Monitor;
let Battery = classes.Battery;

mixins.computerQualityMixin(Desktop);
mixins.styleMixin(Desktop);
mixins.computerQualityMixin(Laptop);
mixins.styleMixin(Laptop);

let keyboard = new Keyboard('Dell', 0.2);
let monitor = new Monitor('Dell', 1680, 1050);
let battery = new Battery('Dell', 4);

let desktop = new Desktop('Dell', 4.50, 16, 4, keyboard, monitor);
let laptop = new Laptop('Dell', 2.50, 4, 2, 2, 'Black', battery);

console.log(desktop.getQuality()); // 8.166666666666666
console.log(desktop.isFast()); // true
console.log(desktop.isRoomy()); // false
console.log(desktop.isFullSet()); // true
console.log(desktop.isClassy()); // false (always)

console.log(laptop.getQuality()); // 2.8333333333333335
console.log(laptop.isFast()); // true
console.log(laptop.isRoomy()); // false
console.log(laptop.isClassy()); // true