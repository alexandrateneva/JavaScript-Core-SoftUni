function extractsAllWords(input) {
    let strUpper = input.toUpperCase();
    let words = extractWords();
    return words.join(', ');

    function extractWords() {
        return strUpper.split(/\W+/).filter(w => w !== '');
    }
}

console.log(extractsAllWords('Hi, how are you?'));
console.log(extractsAllWords('hello'));
