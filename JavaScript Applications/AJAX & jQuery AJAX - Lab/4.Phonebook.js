const URL = 'https://phonebook-5c2cf.firebaseio.com/phonebook';

$('#btnLoad').on('click', loadData);
$('#btnCreate').on('click', createData);

function loadData() {
    $('#phonebook').empty();

    $.ajax({
        method: 'GET',
        url: URL + '.json',
        success: handleSuccess,
        error: handleError
    });

    function handleSuccess(res) {
        let contacts = $('#phonebook');
        for (let key in res) {
            let name = res[key].name;
            let phone = res[key].phone;
            addElementToPhonebook(name, phone, key);
        }
    }
}

function createData() {
    let name = $('#person').val();
    let phone = $('#phone').val();
    if (name === '' || phone === '') {
        return handleError();
    }
    let postData = JSON.stringify({name, phone});

    $.ajax({
        method: 'POST',
        url: URL + '.json',
        data: postData,
        success: appendElement,
        error: handleError
    });

    function appendElement(res) {
        addElementToPhonebook(name, phone, res.name);
    }

    $('#person').val('');
    $('#phone').val('');
}

function handleError(err) {
    $("#phonebook").append($("<li>Error</li>"));
}

function addElementToPhonebook(name, phone, id) {
    let contacts = $('#phonebook');
    let li = $('<li>').text(`${name}: ${phone}  `);
    li.append($('<button>Delete</button>').on('click', function () {
        $.ajax({
            method: 'DELETE',
            url: URL + '/' + id + '.json',
            success: function () {
                li.remove();
            },
            error: handleError
        });
    }));
    contacts.append(li);
}