function domSearch(selector, isCaseSensitive) {
    let divAddControls = $('<div>').addClass('add-controls')
        .append($('<label>').text('Enter text: ').append($('<input>')))
        .append($('<a>').addClass('button').css('display', 'inline-block').text('Add').on('click', addItem));

    let divSearchControls = $('<div>').addClass('search-controls')
        .append($('<label>').text('Search:').append($('<input>').on('input', search)));

    let divResult = $('<div>').addClass('result-controls')
        .append($('<ul>').addClass('items-list'));

    $(selector).append(divAddControls).append(divSearchControls).append(divResult);

    function addItem() {
        let text = $('.add-controls label input');
        let textBold = $('<strong>').text(text.val().trim());
        let deleteBtn = $('<a>').addClass('button').text('X').on('click', function () {
            $(this).parent().remove();
        });
        let newElement = $('<li>').addClass('list-item').append(deleteBtn).append(textBold);
        $('.result-controls ul').append(newElement);
        text.val('');
    }

    function search() {
        let searched = $(this).val();
        let items = $('.list-item strong').toArray();
        for (let item of items) {
            let current = $(item);

            if (isCaseSensitive) {
                if (current.text().indexOf(searched) < 0) {
                    current.parent().css('display', 'none')
                } else {
                    current.parent().css('display', '')
                }
            } else {
                if (current.text().toLowerCase().indexOf(searched.toLowerCase()) < 0) {
                    current.parent().css('display', 'none')
                } else {
                    current.parent().css('display', '')
                }
            }
        }
    }
}

