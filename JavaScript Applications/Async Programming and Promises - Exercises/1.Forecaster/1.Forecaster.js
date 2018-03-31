function attachEvents() {
    const btn = $('#submit');
    const cityName = $('#location');
    const forecast = $('#forecast');
    const current = $('#current');
    const upcoming = $('#upcoming');
    const request = $('#request');
    const symbols = {
        'Sunny': '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        'Overcast': '&#x2601', // ☁
        'Rain': '&#x2614', // ☂
        'Degrees': '&#176'  // °
    };

    btn.on('click', getWeather);
    let code = '';

    function getWeather() {
        $.ajax({
            method: 'GET',
            url: 'https://judgetests.firebaseio.com/locations.json',
            success: loadLocation,
            error: handleError
        });
    }

    function loadLocation(resLoc) {
        if (cityName.val() !== '') {
            let city = resLoc.find(x => x.name === cityName.val());
            if (city === undefined) {
                return handleError();
            }
            request.find('#error').remove();
            code = city.code;

            cityName.val('');

            $.ajax({
                method: 'GET',
                url: 'https://judgetests.firebaseio.com/forecast/today/' + code + '.json',
                success: loadCurrentConditions,
                error: handleError
            });

            $.ajax({
                method: 'GET',
                url: 'https://judgetests.firebaseio.com/forecast/upcoming/' + code + '.json',
                success: loadUpcomingConditions,
                error: handleError
            });
        }
    }

    function loadCurrentConditions(resCurrent) {
        forecast.css('display', 'block');
        current.find('span').remove();
        let condSymbol = symbols[`${resCurrent.forecast.condition}`];
        let symbolSpan = $('<span>').addClass('condition symbol').html(condSymbol);
        current.append(symbolSpan);

        let conditionSpan = $('<span>').addClass('condition');
        let citySpan = $('<span>').addClass('forecast-data').text(resCurrent.name);
        let tempSpan = $('<span>').addClass('forecast-data').html(`${resCurrent.forecast.low}&#176/${resCurrent.forecast.high}&#176`);
        let condSpan = $('<span>').addClass('forecast-data').text(resCurrent.forecast.condition);
        conditionSpan.append(citySpan).append(tempSpan).append(condSpan);
        current.append(conditionSpan);
    }

    function loadUpcomingConditions(resUpcoming) {
        forecast.css('display', 'block');
        upcoming.find('span').remove();
        let allDays = resUpcoming.forecast;
        for (let day of allDays) {
            let upcomingSpan = $('<span>').addClass('upcoming');

            let symbolSpan = $('<span>').addClass('symbol').html(symbols[`${day.condition}`]);
            let tempSpan = $('<span>').addClass('forecast-data').html(`${day.low}&#176/${day.high}&#176`);
            let condSpan = $('<span>').addClass('forecast-data').text(day.condition);

            upcomingSpan.append(symbolSpan).append(tempSpan).append(condSpan);
            upcoming.append(upcomingSpan);
        }
    }

    function handleError() {
        forecast.css('display', 'none');
        if (request.find('#error').length === 0) {
            return request.append('<div id="error" class="label">Error</div>');
        }
    }
}