function add(num) {
    let sum = num;

    function addAndRepeat(num2) {
        sum += num2;
        return addAndRepeat;
    }

    addAndRepeat.toString = function () {
        return sum;
    };

    return addAndRepeat;
}

console.log((add(1)).toString());
console.log((add(1)(6)(-3)).toString());