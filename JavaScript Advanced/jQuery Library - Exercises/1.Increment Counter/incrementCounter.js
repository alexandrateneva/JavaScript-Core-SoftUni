function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea class="counter" disabled="disabled"></textarea>');
    textArea.val(0);
    let addButton = $('<button class="btn" id="addBtn">Add</button>');
    let incrementButton = $('<button class="btn" id="incrementBtn">Increment</button>');
    let list = $('<ul class="results"></ul>');

    $(incrementButton).on("click", function () {
        textArea.val(Number(textArea.val()) + 1);
    });
    $(addButton).on("click", function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    textArea.appendTo(fragment);
    addButton.appendTo(fragment);
    incrementButton.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
};