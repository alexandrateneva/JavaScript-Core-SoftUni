function solveQuadraticEquation(a, b, c) {
    let d = b * b - 4 * a * c;
    if (d > 0) {
        let x1 = (-b - Math.sqrt(d)) / (2 * a);
        let x2 = (-b + Math.sqrt(d)) / (2 * a);
        console.log(x1);
        console.log(x2);
    }
    else if (d === 0) {
        let x = -b / (2 * a);
        console.log(x);
    }
    else {
        console.log("No");
    }
}

solveQuadraticEquation(6, 11, -35);
solveQuadraticEquation(1, -12, 36);
solveQuadraticEquation(5, 2, 1);