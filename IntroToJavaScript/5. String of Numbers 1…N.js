function getStringOfNumbers(n) {
    let result = "";

    for (let i = 1; i <= Number(n); i++) {
        result += i;
    }

    console.log(result);
}

getStringOfNumbers("10");