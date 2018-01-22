function printComposeTag(data) {
    let fileLocation = data[0];
    let alternateText = data[1];

    console.log(`<img src="${fileLocation}" alt="${alternateText}">`);
}

printComposeTag(['smiley.gif', 'Smiley Face']);

