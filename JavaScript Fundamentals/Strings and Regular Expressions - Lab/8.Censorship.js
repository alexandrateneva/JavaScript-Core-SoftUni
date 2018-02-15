function censorText(text, forbiddenWords) {
    for (let word of forbiddenWords) {
        let substitute = '-'.repeat(word.length);
        let index = text.indexOf(word, 0);
        while (index > -1) {
            text = text.replace(word, substitute);
            index = text.indexOf(word, index + 1);
        }
    }
    return text;
}

console.log(censorText('I like C#, HTML, JS and PHP.',
    ['C#', 'HTML', 'PHP']));