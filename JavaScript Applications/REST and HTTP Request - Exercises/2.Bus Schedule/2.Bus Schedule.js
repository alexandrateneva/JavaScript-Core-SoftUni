let result = (function solve() {
    let currentId = 'depot';
    let oldName = '';

    function depart() {
        let URL = `https://judgetests.firebaseio.com/schedule/${currentId}.json `;
        $.ajax({
            method: 'GET',
            url: URL,
            success: handleSuccess,
            error: handleError
        });

        function handleSuccess(res) {
            currentId = res.next;
            let name = res.name;
            $('#info').find('span').text(`Next stop ${name}`);
            $('#depart').prop('disabled', true);
            $('#arrive').prop('disabled', false);
            oldName = name;
        }

        function handleError() {
            $('#info').find('span').text('Error');
            $('#depart').prop('disabled', true);
            $('#arrive').prop('disabled', true);
        }
    }

    function arrive() {
        $('#info').find('span').text(`Arriving at ${oldName}`);
        $('#depart').prop('disabled', false);
        $('#arrive').prop('disabled', true);
    }

    return {
        depart,
        arrive
    }
})();