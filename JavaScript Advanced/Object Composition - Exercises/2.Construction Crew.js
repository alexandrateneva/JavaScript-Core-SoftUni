function constructionCrew(worker) {
    let weight = worker.weight;
    let experience = worker.experience;
    let bloodAlcoholLevel = worker.bloodAlcoholLevel;
    let handsShaking = worker.handsShaking;

    if (handsShaking) {
        worker.bloodAlcoholLevel += 0.1 * weight * experience;
        worker.handsShaking = false;
    }

    return worker;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));

console.log(constructionCrew({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));

console.log(constructionCrew({
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
}));