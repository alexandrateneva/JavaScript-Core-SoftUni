function convertFromJSONtoHTMLTable(input) {
    let objs = JSON.parse(input);
    let result = '<table>\n  <tr>';
    let keys = Object.keys(objs[0]);
    for (let i = 0; i < keys.length; i++) {
        result += `<th>${keys[i]}</th>`;
    }
    result += '</tr>\n';
    for (let obj of objs) {
        result += '  <tr>';
        for (let value of Object.values(obj)) {
            if (typeof value === 'string') {
                value = htmlEscape(value);
            }
            result += `<td>${value}</td>`;
        }
        result += '</tr>\n';
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

convertFromJSONtoHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');