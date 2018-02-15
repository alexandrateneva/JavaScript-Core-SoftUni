function checkStartsWith(str, subStr) {
    return str.substr(0, subStr.length) === subStr;
}

console.log(checkStartsWith('How have you been?', 'how'));
console.log(checkStartsWith('I like JS :)', 'I like JS'));