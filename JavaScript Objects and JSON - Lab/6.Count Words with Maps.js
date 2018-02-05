function countWordsWithMap(input) {
    let text = input.join('\n');
    let words = text.split(/\W+/).filter(e => e !== '');
    let result = new Map();
    for (let i = 0; i < words.length; i++) {
        let current = words[i].toLowerCase();
        if (!result.has(current)) {
            result.set(current, 0);
        }
        result.set(current, result.get(current) + 1);
    }

    let mapAsc = new Map([...result].sort());
    mapAsc.forEach((a, b) => console.log(`'${b}' -> ${a} times`))
}

countWordsWithMap(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);