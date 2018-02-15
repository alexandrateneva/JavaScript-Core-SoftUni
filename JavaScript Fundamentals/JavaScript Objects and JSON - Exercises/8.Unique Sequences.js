function storeUniqueSequences(input) {
    let uniqueArrays = new Set();
    let arrays = input
        .map(e => JSON.parse(e))
        .map(e => e.sort((a, b) => b - a))
        .map(e => e.join(', '))
        .forEach(e => uniqueArrays.add(e));

    [...uniqueArrays]
        .sort(function (a, b) {
            if (a.split(', ').length > b.split(', ').length) return 1;
            if (a.split(', ').length < b.split(', ').length) return -1;
            return 0;
        })
        .forEach(e => console.log(`[${e}]`));
}

storeUniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
storeUniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);