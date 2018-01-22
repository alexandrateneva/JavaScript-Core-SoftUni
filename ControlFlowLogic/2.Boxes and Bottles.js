function calculateBoxesForBottles(bottles, bottlesInBox) {
    let boxes = Math.ceil(bottles / bottlesInBox);
    return boxes;
}

console.log(calculateBoxesForBottles(20, 5));
console.log(calculateBoxesForBottles(15, 7));
console.log(calculateBoxesForBottles(5, 10));


