function scoreTableInHTML(input) {
    let scores = JSON.parse(input);
    let result = '<table>\n';
    result += '  <tr><th>name</th><th>score</th></tr>\n';
    for (let score of scores) {
        result += `  <tr><td>${htmlEscape(score['name'])}</td><td>${Number(score['score'])}</td></tr>\n`;
    }
    result += '</table>';
    console.log(result);

    function htmlEscape(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '\'': '&#39;'
        };
        return text.replace(/[\"'&<>]/g, ch => map[ch]);
    }
}

scoreTableInHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
scoreTableInHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');