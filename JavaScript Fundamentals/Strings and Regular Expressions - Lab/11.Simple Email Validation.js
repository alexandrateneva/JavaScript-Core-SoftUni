function simpleEmailValidation(email) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/;
    let isValid = regex.test(email);

    console.log((isValid) ? 'Valid' : 'Invalid');
}

simpleEmailValidation('valid@email.bg');
simpleEmailValidation('invalid@emai1.bg');