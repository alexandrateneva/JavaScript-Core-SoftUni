function listBuilder(selector) {
    let element = $(selector);
    let ul = $('<ul>');

    function createNewList() {
        element.empty();
        element.append(ul);
    }

    function addItem(text) {
        let li = $('<li>').text(text);
        let upBtn = $('<button>').text('Up');
        upBtn.on('click', function () {
            let previous = li.prev();
            li.insertBefore(previous);
        });
        let downBtn = $('<button>').text('Down');
        downBtn.on('click', function () {
            let next = li.next();
            li.insertAfter(next);
        });
        ul.append(li.append(upBtn).append(downBtn));
    }

    return {
        createNewList,
        addItem
    }
}