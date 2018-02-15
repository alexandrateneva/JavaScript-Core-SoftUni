function calculatesTheTotalAmountOfSpice(input) {
    let yield = Number(input);
    let days = 0;
    let totalAmount = 0;
    for (let i = yield; i >= 100; i -= 10) {
        totalAmount += i;
        totalAmount -= 26;
        days++;
    }
    if (totalAmount >= 26) {
        totalAmount -= 26;
    }
    console.log(days);
    console.log(totalAmount);
}

calculatesTheTotalAmountOfSpice(111);
calculatesTheTotalAmountOfSpice(200);
calculatesTheTotalAmountOfSpice(100);
calculatesTheTotalAmountOfSpice(50);