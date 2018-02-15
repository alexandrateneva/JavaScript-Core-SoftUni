function expressionSplit(text) {
    let bits = text.split(/[(),;.\s]+/g);
    bits.forEach(b => console.log(b));
}

expressionSplit('let sum = 4 * 4,b = "wow";');