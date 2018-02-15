function formatHelper(input) {
    let regexForCheckSpaceAfterSymbols = /([.,!?:;]){1}((?!\s)|\s{2,})/g;
    let regexForCheckSpaceBeforeSymbols = /\s+([.,!?:;]){1}/g;
    let regexForCheckSequences = /\s*\.\s*\.\s*\.\s*!/g;
    let regexForCheckDatesAndNumbers = /\. (?=[0-9])/g;
    let regexForCheckQuotes = /\"(.+?)\"/g;

    input = input.replace(regexForCheckSpaceAfterSymbols, `$1 `)
        .replace(regexForCheckSpaceBeforeSymbols, '$1')
        .replace(regexForCheckSequences, '...!')
        .replace(regexForCheckDatesAndNumbers, '.')
        .replace(regexForCheckQuotes, (match, group1) => `"${group1.trim()}"`);

    console.log(input);
}

formatHelper('Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .');
formatHelper('Make,sure to give:proper spacing where is needed... !');
formatHelper('We should test how digits and dates would be printed: first some digit - 9,than some number  : 3      . 14    ! Do not forget about the dates though: 09  .   11; Now, spam more: 311 .1, 31 . not number 31   .   31 .  2031!');
formatHelper('Test everything, including:dates    : 4.     3         .10, digits:1,2,3,4,numbers :  14.4,15.6,3. Quotation should be should be trimmed after additional spaces are given:"Quote should remain the same, even with explanation mark in the end!"; this quote should be trimmed in the beginning: "   Trim start"!');