function concatenateReversed(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let currentStr = input[input.length - 1 - i];
        let reversedCurrentStr = currentStr.split('').reverse().join('');
        result = result.concat(reversedCurrentStr);
    }
    console.log(result);
}

concatenateReversed(['I', 'am', 'student']);
concatenateReversed(['race', 'car']);