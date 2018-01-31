function matchAllWords(text) {
    let regex = /\w+/g;
    let words = text.match(regex);

    console.log(words.join('|'));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
matchAllWords('_(Underscores) are also word characters');