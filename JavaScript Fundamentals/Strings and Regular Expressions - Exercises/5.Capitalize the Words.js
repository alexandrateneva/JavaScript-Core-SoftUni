function capitalizeWords(text) {
    let words = text.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let capitalizedWord = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
        result.push(capitalizedWord);
    }
    return result.join(' ');
}

console.log(capitalizeWords('Was that Easy? tRY thIs onE for SiZe!'));