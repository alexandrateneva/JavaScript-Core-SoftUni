function getGreatestCommonDivisor(a, b) {
    if (a === 0) {
        return b;
    }

    while (b !== 0) {
        if (a > b) {
            a = a - b;
        }
        else {
            b = b - a;
        }
    }
    return a;
}

// Recursive solution
function getGreatestCommonDivisor(a, b) {
    if (b) {
        return getGreatestCommonDivisor(b, a % b);
    }
    else {
        return Math.abs(a);
    }
}

console.log(getGreatestCommonDivisor(252, 105));