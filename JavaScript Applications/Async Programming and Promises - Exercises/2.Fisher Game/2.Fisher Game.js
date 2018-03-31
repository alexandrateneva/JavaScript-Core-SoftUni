function attachEvents() {
    const serviceUrl = 'https://baas.kinvey.com/appdata/kid_HyBFgkF9z/biggestCatches';
    const kinveyUsername = "Alex";
    const kinveyPassword = "12345";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {"Authorization": "Basic " + base64auth};

    const catches = $('#catches');
    const addBtn = $('button.add');
    addBtn.on('click', addData);
    const loadBtn = $('button.load');
    loadBtn.on('click', loadData);

    function addData() {
        let addForm = $('#addForm');
        let angler = addForm.find('input.angler');
        let weight = addForm.find('input.weight');
        let species = addForm.find('input.species');
        let location = addForm.find('input.location');
        let bait = addForm.find('input.bait');
        let captureTime = addForm.find('input.captureTime');

        let obj = {
            angler: angler.val(),
            weight: Number(weight.val()),
            species: species.val(),
            location: location.val(),
            bait: bait.val(),
            captureTime: Number(captureTime.val())
        };

        if (checkProperties(obj)) {
            return alert('Аll fields must be filled in!');
        }

        $.ajax({
            method: 'POST',
            url: serviceUrl,
            data: JSON.stringify(obj),
            contentType: "application/json",
            headers: authHeaders,
            success: addCatch,
            error: errorHandler
        });

        function addCatch(res) {
            emptyInputFields([angler, weight, species, location, bait, captureTime]);

            obj._id = res._id;
            createCatch(obj);
        }

        function emptyInputFields(fields) {
            for (let field of fields) {
                field.val('');
            }
        }

        function checkProperties(obj) {
            for (let key in obj) {
                if (obj[key] !== null && obj[key] !== "")
                    return false;
            }
            return true;
        }
    }

    function loadData() {
        $.ajax({
            method: 'GET',
            url: serviceUrl,
            headers: authHeaders,
            success: loadCatches,
            error: errorHandler
        });

        function loadCatches(res) {
            catches.empty();
            for (let current of res) {
                createCatch(current);
            }
        }
    }

    function createCatch(current) {
        let mainDiv = $(`<div class="catch" data-id="${current._id}"></div>`);
        mainDiv.append($('<label>Angler</label>'));
        mainDiv.append($(`<input type="text" class="angler" value="${current.angler}"/>`));
        mainDiv.append($('<label>Weight</label>'));
        mainDiv.append($(`<input type="number" class="weight" value="${current.weight}"/>`));
        mainDiv.append($('<label>Species</label>'));
        mainDiv.append($(`<input type="text" class="species" value="${current.species}"/>`));
        mainDiv.append($('<label>Location</label>'));
        mainDiv.append($(`<input type="text" class="location" value="${current.location}"/>`));
        mainDiv.append($('<label>Bait</label>'));
        mainDiv.append($(`<input type="text" class="bait" value="${current.bait}"/>`));
        mainDiv.append($('<label>Capture Time</label>'));
        mainDiv.append($(`<input type="number" class="captureTime" value="${current.captureTime}"/>`));
        let updateBtn = $('<button class="update">Update</button>').on('click', updateData);
        mainDiv.append(updateBtn);
        let deleteBtn = $('<button class="delete">Delete</button>').on('click', deleteData);
        mainDiv.append(deleteBtn);

        catches.append(mainDiv);
    }

    function updateData() {
        let currentCatch = $(this).parent();
        let id = currentCatch.attr("data-id");

        let obj = {
            angler: currentCatch.find('.angler').val(),
            weight: Number(currentCatch.find('.weight').val()),
            species: currentCatch.find('.species').val(),
            location: currentCatch.find('.location').val(),
            bait: currentCatch.find('.bait').val(),
            captureTime: Number(currentCatch.find('.captureTime').val())
        };

        $.ajax({
            method: 'PUT',
            url: serviceUrl + `/${id}`,
            data: JSON.stringify(obj),
            headers: authHeaders,
            contentType: "application/json",
            success: updateCatch,
            error: errorHandler
        });

        function updateCatch() {
            loadData();
        }
    }

    function deleteData() {
        let currentCatch = $(this).parent();
        let id = currentCatch.attr("data-id");

        $.ajax({
            method: 'DELETE',
            url: serviceUrl + `/${id}`,
            headers: authHeaders,
            contentType: "application/json",
            success: deleteCatch,
            error: errorHandler
        });

        function deleteCatch() {
            currentCatch.remove();
        }
    }

    function errorHandler(error) {
        alert('Error!');
    }
}