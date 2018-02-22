function wikiParser(selector) {
    let text = $(selector).text();

    text = text.replace(/'''([^'=\[]*?)'''/g, '<b>$1</b>')
        .replace(/(=+)([^=]+)(=+)/g, (match, gr1, gr2, gr3) => `<h${gr1.length}>${gr2}</h${gr3.length}>`)
        .replace(/''([^'=\[]*?)''/g, '<i>$1</i>')
        .replace(/\[\[([^'=\[\|]*?)]]/g, '<a href="/wiki/$1">$1</a>')
        .replace(/(\[\[([^'=\[]*?)\|([^'=\[]*)]])/g, '<a href="/wiki/$2">$3</a>');

    $(selector).html(text);
}
