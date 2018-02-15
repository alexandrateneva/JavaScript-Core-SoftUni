function countWordsInAText(input) {
    let text = input.join('\n');
    let words = text.split(/\W+/).filter(e => e !== '');
    let result = {};
    for (let i = 0; i < words.length; i++) {
        let current = words[i];
        if (!result[`${current}`]) {
            result[`${current}`] = 0;
        }
        result[`${current}`] += 1;
    }
    console.log(JSON.stringify(result));
}

countWordsInAText(['JS devs use Node.js for server-side JS.-- JS for devs']);