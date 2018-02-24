let solution = (() => {
    return {
        add: add,
        multiply: multiply,
        length: length,
        dot: dot,
        cross: cross
    };

    function add() {
        let vector1 = arguments[0];
        let vector2 = arguments[1];
        return [(vector1[0] + vector2[0]), (vector1[1] + vector2[1])];
    }

    function multiply() {
        let vector1 = arguments[0];
        let num = arguments[1];
        return [(vector1[0] * num), (vector1[1] * num)];
    }

    function length() {
        let vector1 = arguments[0];
        return Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]);
    }

    function dot() {
        let vector1 = arguments[0];
        let vector2 = arguments[1];
        return (vector1[0] * vector2[0] + vector1[1] * vector2[1]);
    }

    function cross() {
        let vector1 = arguments[0];
        let vector2 = arguments[1];
        return (vector1[0] * vector2[1] - vector1[1] * vector2[0]);
    }
})();

console.log(solution.cross([3, 7], [1, 0]));
console.log(solution.dot([2, 3], [2, -1]));
console.log(solution.length([3, -4]));
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));