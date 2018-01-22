function getVolumeAndSurfaceAreaOfCone(radius, height) {
    let volume = Math.PI * radius * radius * height / 3;
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let surfaceArea = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume}`);
    console.log(`area = ${surfaceArea}`);
}

getVolumeAndSurfaceAreaOfCone(3, 5);
getVolumeAndSurfaceAreaOfCone(3.3, 7.8);