function timer() {
    let time = 0;
    let timer;
    let isRunning = false;

    $('#start-timer').on('click', function () {
        if (!isRunning) {
            timer = setInterval(incrementTime, 1000);
            isRunning = true;
        }
    });

    $('#stop-timer').on('click', function () {
        clearInterval(timer);
        isRunning = false;
    });

    function incrementTime() {
        time++;
        $('#hours').text(("0" + Math.trunc(time / 3600)).slice(-2));
        $('#minutes').text(("0" + Math.trunc((time / 60) % 60)).slice(-2));
        $('#seconds').text(("0" + Math.trunc(time % 60)).slice(-2));
    }
}