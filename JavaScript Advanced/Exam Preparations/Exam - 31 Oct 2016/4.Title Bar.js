class TitleBar {
    constructor(title) {
        this.title = title;
        this._element = this.createElement();
    }

    createElement() {
        let header = $('<header>').addClass('header');
        let divHeaderRow = $('<div>').addClass('header-row');
        let btn = $('<a class="button">&#9776;</a>');

        divHeaderRow.append(btn);
        divHeaderRow.append($(`<span class="title">${this.title}</span>`));

        let divDrawer = $('<div>').addClass('drawer').css('display', 'none');
        divDrawer.append($('<nav>').addClass('menu'));

        btn.on('click', function () {
            if (divDrawer.css('display') === 'none') {
                divDrawer.css('display', 'block');
            }
            else {
                divDrawer.css('display', 'none');
            }
        });

        header.append(divHeaderRow);
        header.append(divDrawer);
        return header;
    }

    addLink(href, name) {
        let menu = this._element.find('.menu');
        let a = $('<a>').addClass('menu-link').attr('href', href).text(name);
        menu.append(a);
    }

    appendTo(selector) {
        $(selector).prepend(this._element);
    }
}


let header = new TitleBar('Title Bar Problem');
header.addLink('/', 'Home');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#container');
