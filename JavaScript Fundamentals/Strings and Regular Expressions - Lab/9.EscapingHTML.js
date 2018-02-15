function escapingHTML(input) {
    let result = '<ul>\n';
    for (let text of input) {
        let escapedText = htmlEscape(text);
        result += `  <li>${escapedText}</li>\n`;
    }
    result += '</ul>';
    return result;

    function htmlEscape(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return text.replace(/[\"&<>]/g, ch => map[ch]);
    }
}

console.log(escapingHTML(['<b>unescaped text</b>', 'normal text']));