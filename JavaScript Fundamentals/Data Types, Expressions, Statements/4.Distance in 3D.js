function getDistanceIn3D(data) {
    let xA = data[0];
    let yA = data[1];
    let zA = data[2];
    let xB = data[3];
    let yB = data[4];
    let zB = data[5];

    let distance = Math.sqrt((xB - xA) ** 2 + (yB - yA) ** 2 + (zB - zA) ** 2);
    console.log(distance);
}

getDistanceIn3D([1, 1, 0, 5, 4, 0]);
getDistanceIn3D([3.5, 0, 1, 0, 2, -1]);