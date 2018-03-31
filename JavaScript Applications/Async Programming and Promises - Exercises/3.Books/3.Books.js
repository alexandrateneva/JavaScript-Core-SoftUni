class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

function attachEvents() {
    const serviceUrl = 'https://baas.kinvey.com/appdata/kid_SyT2wfY9G/books';
    const kinveyUsername = "Alex";
    const kinveyPassword = "12345";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {"Authorization": "Basic " + base64auth};

    const books = $('#books');
    const addBtn = $('button.add');
    addBtn.on('click', addData);
    const loadBtn = $('button.load');
    loadBtn.on('click', loadData);

    function addData() {
        let addForm = $('#addForm');
        let title = addForm.find('input.title');
        let author = addForm.find('input.author');
        let isbn = addForm.find('input.isbn');

        let book = new Book(title.val(), author.val(), isbn.val());

        if (checkProperties(book)) {
            return alert('Аll fields must be filled in!');
        }

        $.ajax({
            method: 'POST',
            url: serviceUrl,
            data: JSON.stringify(book),
            contentType: "application/json",
            headers: authHeaders,
            success: addBook,
            error: errorHandler
        });

        function addBook(res) {
            emptyInputFields([title, author, isbn]);

            book._id = res._id;
            createBook(book);
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
            books.empty();
            for (let current of res) {
                createBook(current);
            }
        }
    }

    function createBook(current) {
        let mainDiv = $(`<div class="book" data-id="${current._id}"></div>`);
        mainDiv.append($('<label>Title</label>'));
        mainDiv.append($(`<input type="text" class="title" value="${current.title}"/>`));
        mainDiv.append($('<label>Author</label>'));
        mainDiv.append($(`<input type="text" class="author" value="${current.author}"/>`));
        mainDiv.append($('<label>ISBN</label>'));
        mainDiv.append($(`<input type="text" class="isbn" value="${current.isbn}"/>`));

        let updateBtn = $('<button class="update">Update</button>').on('click', updateData);
        mainDiv.append(updateBtn);
        let deleteBtn = $('<button class="delete">Delete</button>').on('click', deleteData);
        mainDiv.append(deleteBtn);

        books.append(mainDiv);
    }

    function updateData() {
        let currentBook = $(this).parent();
        let id = currentBook.attr("data-id");

        let book = new Book(currentBook.find('.title').val(), currentBook.find('.author').val(), currentBook.find('.isbn').val());

        $.ajax({
            method: 'PUT',
            url: serviceUrl + `/${id}`,
            data: JSON.stringify(book),
            headers: authHeaders,
            contentType: "application/json",
            success: updateBook,
            error: errorHandler
        });

        function updateBook() {
            loadData();
        }
    }

    function deleteData() {
        let currentBook = $(this).parent();
        let id = currentBook.attr("data-id");

        $.ajax({
            method: 'DELETE',
            url: serviceUrl + `/${id}`,
            headers: authHeaders,
            contentType: "application/json",
            success: deleteBook,
            error: errorHandler
        });

        function deleteBook() {
            currentBook.remove();
        }
    }

    function errorHandler(error) {
        alert('Error!');
    }
}