function attachEvents() {
    const serviceUrl = 'https://baas.kinvey.com/appdata/kid_rymyycq5G/';
    const kinveyUsername = "guest";
    const kinveyPassword = "guest";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {"Authorization": "Basic " + base64auth};
    const results = $('#results');
    let countries = [];
    let towns = [];

    $.ajax({
        method: 'GET',
        url: serviceUrl + 'countries',
        headers: authHeaders,
        error: errorHandler,
        success: loadDataCountries
    });

    $.ajax({
        method: 'GET',
        url: serviceUrl + 'towns',
        headers: authHeaders,
        error: errorHandler,
        success: loadDataTowns
    });

    $('#btnAddCountry').on('click', function () {
        let countryName = $('#countryToAdd');

        if (countries.findIndex(c => c.name === countryName.val()) >= 0) {
            countryName.val('');
            return alert('This country already exist.');
        }

        if (countryName.val() !== '') {
            let country = {name: countryName.val()};

            $.ajax({
                method: 'POST',
                url: serviceUrl + 'countries',
                data: JSON.stringify(country),
                contentType: "application/json",
                headers: authHeaders,
                success: addCountry,
                error: errorHandler
            });

            countryName.val('');
        }
    });

    $('#btnShowTowns').on('click', function () {
        let countryName = $('#countryToShowTowns');
        let townsList = $('#towns');
        townsList.empty();
        if (countryName.val() !== '') {
            let country = countries.find(c => c.name === countryName.val());
            if (country === undefined) {
                countryName.val('');
                return alert('This country is not find.');
            }
            let countryId = country._id;

            for (let obj of towns) {
                if (obj.country_id === countryId) {
                    townsList.append($(`<li>${obj.name}</li>`));
                }
            }
        }
    });

    $('#btnAddTown').on('click', function () {
        let countryName = $('#countryOfTownToAdd');
        let townName = $('#townToAdd');

        if (countryName.val() !== '' && townName.val() !== '') {
            let country = countries.filter(c => c.name === countryName.val())[0];
            if (country === undefined) {
                countryName.val('');
                townName.val('');
                return alert('First add the country.');
            }
            let countryId = country._id;

            if (towns.findIndex(c => c.name === townName.val()) >= 0) {
                countryName.val('');
                townName.val('');
                return alert('This town already exist.');
            }

            let currentTown = {
                name: townName.val(),
                country_id: countryId
            };
            towns.push(currentTown);
            $.ajax({
                method: 'POST',
                url: serviceUrl + 'towns',
                data: JSON.stringify(currentTown),
                contentType: "application/json",
                headers: authHeaders,
                error: errorHandler
            });
            countryName.val('');
            townName.val('');
        }
    });

    function addCountry(res) {
        countries.push(res);
        results.append($('<li>').text(res.name));
    }

    function loadDataCountries(res) {
        for (let country of res) {
            addCountry(country);
        }
    }

    function loadDataTowns(res) {
        for (let town of res) {
            towns.push(town);
        }
    }

    function errorHandler(error) {
        alert('Error:' + error.message);
    }
}