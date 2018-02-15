function getMessageAndCoordinates(key, text) {
    let pattern = /(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi;
    let messagePattern = new RegExp(`(${key})(.*?)(${key})`, 'g');
    let message = messagePattern.exec(text)[2];
    let north = '';
    let east = '';
    let match = pattern.exec(text);
    while (match) {
        if (match[1].toLowerCase() === 'north') {
            north = match[2] + '.' + match[4];
        }
        else {
            east = match[2] + '.' + match[4];
        }
        match = pattern.exec(text);
    }
    console.log(`${north} N`);
    console.log(`${east} E`);
    console.log(`Message: ${message}`);
}

getMessageAndCoordinates(['<>',
    'o u%&lu43t&^ftgv><nortH4276hrv756dcc, jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b']);

getMessageAndCoordinates('4ds', 'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532');

getMessageAndCoordinates('encrKey/',
    'east eastnorth east29north 43,456789\n' +
    'north one east 40,000000 encrKey/To live is the rarest thing in the world. Most people exist, that is allencrKey/');