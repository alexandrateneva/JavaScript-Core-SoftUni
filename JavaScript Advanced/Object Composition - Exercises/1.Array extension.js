(function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let result = [];
        if (n > 0 && this.length > n) {
            for (let i = 0; i < this.length; i++) {
                if (i >= n) {
                    result.push(this[i]);
                }
            }
        }
        return result;
    };

    Array.prototype.take = function (n) {
        let result = [];
        if (n > 0) {
            for (let i = 0; i < n; i++) {
                if (this.length > i) {
                    result.push(this[i]);
                }
            }
        }
        return result;
    };

    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }

})();

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.last());
console.log(arr.skip(5));
console.log(arr.take(3));
console.log(arr.sum());
console.log(arr.average());