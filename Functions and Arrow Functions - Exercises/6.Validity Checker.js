function validityCheck(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    console.log(isDistanceInteger(x1, y1, 0, 0));
    console.log(isDistanceInteger(x2, y2, 0, 0));
    console.log(isDistanceInteger(x1, y1, x2, y2));

    function isDistanceInteger(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        if (distance === parseInt(distance)) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        }
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
}

validityCheck([3, 0, 0, 4]);
validityCheck([2, 1, 1, 1]);