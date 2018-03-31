class Student {
    constructor(id, firstName, lastName, facultyNumber, grade) {
        this.ID = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.FacultyNumber = facultyNumber;
        this.Grade = grade;
    }
}

function createAndListStudents() {
    const serviceUrl = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students';
    const kinveyUsername = "guest";
    const kinveyPassword = "guest";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {"Authorization": "Basic " + base64auth};
    const results = $('#results');

    const students = [
        new Student(1, 'Ivan', 'Petrov', '900065791', 6.00),
        new Student(2, 'Peter', 'Georgiev', '900065895', 4.56),
        new Student(3, 'Kristian', 'Angelov', '900065907', 5.80),
        new Student(4, 'Maria', 'Ivanova', '900065111', 6.00),
        new Student(5, 'Martin', 'Dimitrov', '9000657971', 4.60)
    ];

    for (let student of students) {
        $.ajax({
            method: 'POST',
            url: serviceUrl,
            data: JSON.stringify(student),
            contentType: "application/json",
            headers: authHeaders,
            error: errorHandler
        });
    }

    $.ajax({
        method: 'GET',
        url: serviceUrl,
        headers: authHeaders,
        error: errorHandler,
        success: loadData
    });

    function loadData(res) {
        let sortedStudents = res.sort((a, b) => a.ID - b.ID);

        for (let student of sortedStudents) {
            let tr = $('<tr>');
            tr.append($(`<td>${student.ID}</td>`));
            tr.append($(`<td>${student.FirstName}</td>`));
            tr.append($(`<td>${student.LastName}</td>`));
            tr.append($(`<td>${student.FacultyNumber}</td>`));
            tr.append($(`<td>${student.Grade}</td>`));
            results.append(tr);
        }
    }

    function errorHandler(error) {
        alert('Error!');
    }
};