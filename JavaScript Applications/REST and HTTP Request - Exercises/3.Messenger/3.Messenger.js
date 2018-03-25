function attachEvents() {
    let refreshBtn = $('#refresh');
    let sendBtn = $('#submit');
    let messages = $('#messages');
    let result = '';
    let name = $('#author');
    let msgText = $('#content');

    refreshBtn.on('click', function () {
        result = '';
        messages.empty();

        $.ajax({
            method: 'GET',
            url: 'https://messenger-49fa1.firebaseio.com/messenger.json',
            success: getData,
            error: throwError
        });

        function getData(res) {
            for (let key in res) {
                let msg = res[key];
                result += `${msg.author}: ${msg.content}\n`;
            }
            messages.append(result);
        }
    });

    sendBtn.on('click', function () {
        let content = `${name.val()}: ${msgText.val()}\n`;
        let obj = {
            author: name.val(),
            content: msgText.val(),
            timestamp: Date.now()
        };

        name.val('');
        msgText.val('');

        $.ajax({
            method: 'POST',
            url: 'https://messenger-49fa1.firebaseio.com/messenger.json',
            data: JSON.stringify(obj),
            success: addData,
            error: throwError
        });

        function addData() {
            result += content;
            messages.val(result);
        }
    });

    function throwError() {
        messages.val('Error');
    }
}