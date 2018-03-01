(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this == '';
    };

    String.prototype.truncate = function (num) {
        if (this.length <= num) {
            return this.toString();
        }
        else {
            let words = this.split(' ');
            if (words.length > 1) {
                let text = '';
                for (let i = 0; i < words.length; i++) {
                    let currentWord = words[i];
                    if (text.length + currentWord.length > num - 3) {
                        break;
                    }
                    text = text + currentWord + ' ';
                }
                return text.trim() + '...';
            }
            else {
                let text = words[0];
                if (num > 4) {
                    return this.substring(0, num - 3) + '...';
                }
                else {
                    return '.'.repeat(num);
                }
            }
        }
    };

    String.format = function () {
        let text = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            let placeHolder = arguments[i];
            text = text.replace(/{\d+}/, placeHolder);
        }
        return text;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);
