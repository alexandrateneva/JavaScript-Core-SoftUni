function attachEvents() {
    $('#btnLoadTowns').on('click', function () {
        let towns = $('#towns');
        if (towns.val() !== '') {
            let source = $('#towns-template').html();
            let template = Handlebars.compile(source);
            let context = {
                towns: towns.val().split(',').map(e => e.trim())
            };
            let html = template(context);
            let element = $('#root');
            element.empty();
            element.append(html);
            towns.val('');
        }
    })
}