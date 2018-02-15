function extractDatesFromText(input) {
    let regex = /\b\d{1,2}-[A-Z][a-z]{2}-\d{4}\b/g;
    let text = input.join('\n');
    let dates = text.match(regex);

    for (let i = 0; i < dates.length; i++) {
        let elements = dates[i].split('-');
        console.log(dates[i] + ` (Day: ${elements[0]}, Month: ${elements[1]}, Year: ${elements[2]})`);
    }
}

extractDatesFromText(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']);