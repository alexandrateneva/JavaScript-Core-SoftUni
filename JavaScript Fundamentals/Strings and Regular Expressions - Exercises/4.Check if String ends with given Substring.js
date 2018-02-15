function checkEndsWith(str, subStr) {
    return str.substr(-subStr.length) === subStr
}

console.log(checkEndsWith('This sentence ends with fun?', 'fun?'));
console.log(checkEndsWith('This is Houston, we have…', 'We have…'));