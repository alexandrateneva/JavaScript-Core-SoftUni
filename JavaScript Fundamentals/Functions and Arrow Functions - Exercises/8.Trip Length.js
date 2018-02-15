function getTheShortestTrip(input) {
    let xA = input[0];
    let yA = input[1];
    let xB = input[2];
    let yB = input[3];
    let xC = input[4];
    let yC = input[5];

    let distAB = getDistance(xA, yA, xB, yB);
    let distAC = getDistance(xA, yA, xC, yC);
    let distBC = getDistance(xB, yB, xC, yC);

    let ABC = distAB + distBC;
    let ACB = distAC + distBC;
    let BAC = distAB + distAC;

    let min = Math.min(ACB, ABC, BAC);

    if (ABC === min) {
        console.log(`1->2->3: ${min}`);
    }
    else if (ACB === min) {
        console.log(`1->3->2: ${min}`);
    }
    else {
        console.log(`2->1->3: ${min}`)
    }

    function getDistance(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return distance;
    }
}

getTheShortestTrip([0, 0, 2, 0, 4, 0]);
getTheShortestTrip([5, 1, 1, 1, 5, 4]);
getTheShortestTrip([-1, -2, 3.5, 0, 0, 2]);