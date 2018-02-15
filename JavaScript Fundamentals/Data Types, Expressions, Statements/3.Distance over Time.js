function getDistanceOverTime(data) {
    let V1 = data[0];
    let V2 = data[1];
    let T = data[2] / 3600;

    let S1 = V1 * T;
    let S2 = V2 * T;

    console.log(Math.abs(S1 - S2) * 1000);
}

getDistanceOverTime([0, 60, 3600]);
getDistanceOverTime([11, 10, 120]);
getDistanceOverTime([5, -5, 40]);