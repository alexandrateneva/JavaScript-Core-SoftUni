function convertFromJSONtoHTMLtable(input) {
    let employees = input.map(e => JSON.parse(e));
    let result = '<table>\n';
    for (let employee of employees) {
        result += '\t<tr>\n';
        result += `		<td>${htmlEscape(employee['name'])}</td>\n`;
        result += `		<td>${htmlEscape(employee['position'])}</td>\n`;
        result += `		<td>${employee['salary']}</td>\n`;
        result += '\t<tr>\n';
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

convertFromJSONtoHTMLtable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);