function chechIsPrime(num) {
    let prime = true;
    for (let d = 2; d <= Math.sqrt(num); d++) {
        if (num % d === 0) {
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}

console.log(chechIsPrime(1));
console.log(chechIsPrime(2));
console.log(chechIsPrime(7));
console.log(chechIsPrime(8));
console.log(chechIsPrime(81));
