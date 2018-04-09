viewControllers.registerGetController = function (context) {
    context.loggedIn = authenticator.isAuth();
    context.username = sessionStorage.getItem('username');

    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        registerForm: './templates/register/registerForm.hbs',
    }).then(function () {
        this.partial('./templates/register/registerPage.hbs');
    });
};

viewControllers.registerPostController = function (context) {
    let username = context.params.username;
    let password = context.params.password;
    let repeatPassword = context.params.repeatPassword;

    if (password !== repeatPassword) {
        teamsService.showError('Passwords do not match!');
    } else {
        authenticator.register(username, password, context).then(res => {
            authenticator.saveSession(res);
            teamsService.showInfo('Registration successful.');
            context.redirect('#/home');
        }).catch(teamsService.handleError);
    }
};

viewControllers.loginGetController = function (context) {
    context.loggedIn = authenticator.isAuth();
    context.username = sessionStorage.getItem('username');

    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        loginForm: './templates/login/loginForm.hbs',
    }).then(function () {
        this.partial('./templates/login/loginPage.hbs');
    });
};

viewControllers.loginPostController = function (context) {
    let username = context.params.username;
    let password = context.params.password;

    authenticator.login(username, password).then(res => {
        authenticator.saveSession(res);
        teamsService.showInfo('Login successful.');
        context.redirect('#/home');
    }).catch(teamsService.handleError);
};

viewControllers.logoutController = function (context) {
    authenticator.logout().then(() => {
        authenticator.clearSession();
        teamsService.showInfo('Logout successful.');
        context.redirect('#/home');
    }).catch(teamsService.handleError);
};