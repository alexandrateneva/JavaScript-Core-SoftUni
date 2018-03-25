function getInfo() {
    let stopId = $('#stopId').val();
    let listOfBuses = $('#buses');
    listOfBuses.empty();

    let URL = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;
    $.ajax({
        method: 'GET',
        url: URL,
        success: handleSuccess,
        error: handleError
    });

    function handleSuccess(res) {
        let stopName = res.name;
        $('#stopName').text(stopName);
        let buses = res.buses;


        for (let bus in buses) {
            let li = $('<li>').text(`Bus ${bus} arrives in ${buses[bus]} minutes`);
            listOfBuses.append(li);
        }
    }

    function handleError(err) {
        $('#stopName').text('Error');
    }
}