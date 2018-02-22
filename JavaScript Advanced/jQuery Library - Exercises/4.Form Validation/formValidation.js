function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitBtn = $('#submit');
    let validDiv = $('#valid');
    let isAllValid = true;

    submitBtn.on('click', function (ev) {
        ev.preventDefault();
        validateForm();
        isAllValid = true;
    });

    companyCheckbox.on('change', function () {
        (companyCheckbox.is(':checked')) ? companyInfo.css('display', 'block') : companyInfo.css('display', 'none');
    });

    function validateForm() {
        validateInputWithRegex(username, /^[A-Za-z0-9]{3,20}$/g);
        validateInputWithRegex(email, /^.*?@.*?\..*?$/g);

        if (password.val() === confirmPassword.val()) {
            isValid(password);
            isValid(confirmPassword);
            validateInputWithRegex(password, /^\w{5,15}$/g);
            validateInputWithRegex(confirmPassword, /^\w{5,15}$/g);
        }
        else {
            isInvalid(password);
            isInvalid(confirmPassword);
        }

        if (companyCheckbox.is(':checked')) {
            validateCompanyNumber();
        }

        (isAllValid) ? validDiv.css('display', 'block') : validDiv.css('display', 'none');
    }

    function validateInputWithRegex(input, pattern) {
        (pattern.test(input.val())) ? isValid(input) : isInvalid(input);
    }

    function validateCompanyNumber() {
        let number = Number(companyNumber.val());
        (number >= 1000 && number <= 9999) ? isValid(companyNumber) : isInvalid(companyNumber);
    }

    function isValid(element) {
        element.css('border', 'none');
    }

    function isInvalid(element) {
        element.css('border', 'solid red');
        isAllValid = false;
    }
}
