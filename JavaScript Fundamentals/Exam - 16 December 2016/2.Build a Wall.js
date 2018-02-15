function buildAWall(input) {
    let start = input.map(e => Number(e));
    let yardsPerDay = [];
    while (true) {
        let currentDay = 0;
        for (let i = 0; i < start.length; i++) {
            let currentCrew = start[i];
            if (currentCrew !== 30) {
                start[i]++;
                currentDay += 195;
            }
        }
        yardsPerDay.push(currentDay);
        let allAreEqualsTo30 = start.every((val) => val === 30);
        if (allAreEqualsTo30) {
            break;
        }
    }
    let pesos = yardsPerDay.reduce((a, b) => a + b) * 1900;
    console.log(yardsPerDay.join(', '));
    console.log(`${pesos} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);