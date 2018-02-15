function findNamesSentences(text) {
    let regex = /\b_[a-zA-Z0-9]+\b/g;
    let matches = text.match(regex);
    console.log(matches.map(e => e.substr(1)).join(','));
}

findNamesSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');