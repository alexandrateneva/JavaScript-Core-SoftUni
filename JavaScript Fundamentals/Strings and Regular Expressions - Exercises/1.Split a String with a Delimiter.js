function splitStrWithDelimiter(text, delimiter) {
    text.split(delimiter).forEach(e => console.log(e));
}

splitStrWithDelimiter('One-Two-Three-Four-Five', '-');
splitStrWithDelimiter('http://platform.softuni.bg', '.');