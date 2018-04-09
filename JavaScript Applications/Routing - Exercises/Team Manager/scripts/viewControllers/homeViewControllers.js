viewControllers.homeController = function (context) {
    context.loggedIn = authenticator.isAuth();
    context.username = sessionStorage.getItem('username');

    if (authenticator.hasTeam()) {
        context.hasTeam = authenticator.hasTeam();
        context.teamId = sessionStorage.getItem('teamId');
    }

    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/home/home.hbs');
    });
};

viewControllers.aboutController = function (context) {
    context.loggedIn = authenticator.isAuth();
    context.username = sessionStorage.getItem('username');

    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/about/about.hbs');
    });
};