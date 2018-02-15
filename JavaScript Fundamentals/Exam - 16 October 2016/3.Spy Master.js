function findEncodedMessages(input) {
    let key = input.shift();
    let regexForCheckKey = new RegExp(`(?:^| )${key}\\s+([A-Z!%$#]{8,})(?: |\\.|,|$)`, 'gi');
    let regexForCheckMessage = new RegExp(`(\\s+|^)(?:[A-Z!%$#]{8,})`);
    let result = [];

    for (let row of input) {
        let sentence = row;
        let match = regexForCheckKey.exec(row);
        while (match) {
            let matchMsg = regexForCheckMessage.exec(match[1]);
            if (matchMsg !== null) {
                let msg = matchMsg[0].toLowerCase()
                    .replace(/!/g, '1')
                    .replace(/%/g, '2')
                    .replace(/#/g, '3')
                    .replace(/\$/g, '4');

                let startIndex = match.index + match[0].indexOf(match[1], key.length);
                let endIndex = startIndex + msg.length;
                sentence = sentence.substr(0, startIndex) + msg + sentence.substr(endIndex);
            }
            match = regexForCheckKey.exec(row);
        }
        result.push(sentence);
    }
    console.log(result.join('\n'));
}

findEncodedMessages(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!']);

findEncodedMessages(['enCode',
    'Some messages are just not encoded what can you do?',
    'RE - ENCODE THEMNOW! - he said.',
    'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.']);