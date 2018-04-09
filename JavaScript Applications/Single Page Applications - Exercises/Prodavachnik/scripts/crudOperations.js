const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_Sy3iC4AcG';
const APP_SECRET = 'e957cf5df2954e2b9432e85ec97301a2';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const ADS_PER_PAGE = 6;

function loginUser() {
    let username = $('#formLogin input[name=username]').val();
    let password = $('#formLogin input[name=passwd]').val();
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Login successful.')
    }).catch(handleAjaxError)
}

function registerUser() {
    let username = $('#formRegister input[name=username]').val();
    let password = $('#formRegister input[name=passwd]').val();
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Registration successful.')
    }).catch(handleAjaxError)
}

function listAdds() {
    $.ajax({
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads',
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        showView('viewAds');
        if (res.length === 0) {
            $('#viewAds').text('No advertisements available.');
        } else {
            displayPaginationAndAds(res
                .sort(function (a, b) {                            // sort ads by views count, descending
                    if (a.viewCount === b.viewCount) return 0;
                    if (a.viewCount === undefined) return 1;
                    if (b.viewCount === undefined) return -1;
                    return b.viewCount - a.viewCount;
                }));
        }
    }).catch(handleAjaxError)
}


function createAd() {
    let title = $('#formCreateAd input[name=title]').val();
    let description = $('#formCreateAd textarea[name=description]').val();
    let datePublished = $('#formCreateAd input[name=datePublished]').val();
    let price = $('#formCreateAd input[name=price]').val();
    let image = $('#formCreateAd input[name=image]').val();
    let publisher = sessionStorage.getItem('username');

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads',
        data: {title, description, publisher, datePublished, price, image},
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        listAdds();
        showInfo('Ad created.');
    }).catch(handleAjaxError)
}

function deleteAd(ad) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + ad._id,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function () {
        listAdds();
        showInfo('Ad deleted.');
    }).catch(handleAjaxError)
}

function loadAdForEdit(ad) {
    showView('viewEditAd');
    $('#formEditAd input[name=id]').val(ad._id);
    $('#formEditAd input[name=title]').val(ad.title);
    $('#formEditAd textarea[name=description]').val(ad.description);
    $('#formEditAd input[name=datePublished]').val(ad.datePublished);
    $('#formEditAd input[name=price]').val(ad.price);
    $('#formEditAd input[name=image]').val(ad.image);
}

function editAd() {
    let id = $('#formEditAd input[name=id]').val();
    let title = $('#formEditAd input[name=title]').val();
    let description = $('#formEditAd textarea[name=description]').val();
    let datePublished = $('#formEditAd input[name=datePublished]').val();
    let price = $('#formEditAd input[name=price]').val();
    let publisher = sessionStorage.getItem('username');
    let image = $('#formEditAd input[name=image]').val();

    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + id,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: {title, description, publisher, datePublished, price, image}
    }).then(function (res) {
        listAdds();
        showView('viewAds');
        showInfo('Ad edited.');
    })
}

function displayAdvert(ad) {
    let details = $('#viewDetailsAd');
    details.empty();

    let current = sessionStorage.getItem('userId');
    let creator = ad._acl.creator;
    if (current !== creator) {       //increment views count, only if the creator of the ad and the current logged in user are different
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + ad._id,
            headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
        })
    }
    let viewCount = (ad.viewCount === undefined) ? 0 : ad.viewCount;

    let advertInfo = $('<div>').append(
        $(`<img>`).attr("src", ad.image).height(300),
        $('<br>'),
        $('<label>').text('Title:'),
        $('<h1>').text(ad.title),
        $('<label>').text('Description:'),
        $('<h3>').text(ad.description),
        $('<label>').text('Price:'),
        $('<h3>').text(ad.price),
        $('<label>').text('Publisher:'),
        $('<div>').text(ad.publisher),
        $('<label>').text('Date:'),
        $('<div>').text(ad.datePublished),
        $('<label>').text('View count:'),
        $('<div>').text(viewCount));

    details.append(advertInfo);

    showView('viewDetailsAd');
}

function logoutUser() {
    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();
    showInfo('Logout successful.');
}

function signInUser(res, message) {
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('userId', res._id);
    showHomeView();
    showHideMenuLinks();
    showInfo(message);
}

function displayPaginationAndAds(ads) {
    let pagination = $('#pagination-demo');
    if (pagination.data("twbs-pagination")) {
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(ads.length / ADS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            let table = $('#ads > table');
            table.find('tr').each((index, el) => {
                if (index > 0) {
                    $(el).remove()
                }
            });
            let startAd = (page - 1) * ADS_PER_PAGE;
            let endAd = Math.min(startAd + ADS_PER_PAGE, ads.length);
            $(`a:contains(${page})`).addClass('active');
            for (let i = startAd; i < endAd; i++) {
                let tr = $(`<tr>`);
                table.append(
                    $(tr).append($(`<td>${ads[i].title}</td>`))
                        .append($(`<td>${ads[i].description}</td>`))
                        .append($(`<td>${ads[i].publisher}</td>`))
                        .append($(`<td>${ads[i].datePublished}</td>`))
                        .append($(`<td>${ads[i].price}</td>`))
                );
                let td = $('<td>');
                $(tr).append(td);
                if (ads[i]._acl.creator === sessionStorage.getItem('userId')) {
                    $(td).append(
                        $(`<a href="#">[Edit]</a>`).on('click', function () {
                            loadAdForEdit(ads[i]);
                        })
                    ).append(
                        $(`<a href="#">[Delete]</a>`).on('click', function () {
                            deleteAd(ads[i]);
                        })
                    )
                }
                $(td).append(
                    $(`<a href="#">[Read more]</a>`).on('click', function () {
                        displayAdvert(ads[i]);
                    })
                )
            }
        }
    })
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0) {
        errorMsg = "Cannot connect due to network error.";
    }
    if (response.responseJSON && response.responseJSON.description) {
        errorMsg = response.responseJSON.description;
    }
    showError(errorMsg);
}