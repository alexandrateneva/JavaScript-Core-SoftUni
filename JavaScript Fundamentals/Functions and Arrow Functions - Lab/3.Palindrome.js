function checkIfIsAPalindrome(input) {
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(checkIfIsAPalindrome("haha"));
console.log(checkIfIsAPalindrome("racecar"));
console.log(checkIfIsAPalindrome("unitinu"));