const viewControllers = {};

$(() => {
    const APP = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/index.html', viewControllers.homeController);
        this.get('#/home', viewControllers.homeController);
        this.get('#/about', viewControllers.aboutController);

        this.get('#/register', viewControllers.registerGetController);
        this.post('#/register', viewControllers.registerPostController);

        this.get('#/login', viewControllers.loginGetController);
        this.post('#/login', viewControllers.loginPostController);

        this.get('#/logout', viewControllers.logoutController);

        this.get('#/catalog', viewControllers.listTeamsController);
        this.get('#/catalog/:teamId', viewControllers.teamDetailsController);

        this.get('#/create', viewControllers.createTeamGetController);
        this.post('#/create', viewControllers.createTeamPostController);

        this.get('#/edit/:teamId', viewControllers.editTeamGetController);
        this.post('#/edit/:teamId', viewControllers.editTeamPostController);

        this.get('#/join/:teamId', viewControllers.joinTeamController);
        this.get('#/leave', viewControllers.leaveTeamController);
    });

    APP.run();
});