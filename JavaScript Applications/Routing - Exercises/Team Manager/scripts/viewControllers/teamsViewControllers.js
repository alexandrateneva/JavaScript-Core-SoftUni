 viewControllers.listTeamsController = function (context) {
    teamsService.loadTeams().then(res => {
        context.loggedIn = authenticator.isAuth();
        context.username = sessionStorage.getItem('username');
        context.hasNoTeam = !authenticator.hasTeam();
        context.teams = res;

        teamsService.showInfo('Teams listed.');
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            team: './templates/catalog/team.hbs'
        }).then(function () {
            this.partial('./templates/catalog/teamCatalog.hbs');
        });

    }).catch(teamsService.handleError);
};

viewControllers.teamDetailsController = function (context) {
    let teamId = context.params.teamId.slice(1);
    let teamInfo;
    let membersInfo;

    getTeamInfo().then(() => {
        context.loggedIn = authenticator.isAuth();
        context.username = sessionStorage.getItem('username');
        context.hasNoTeam = !authenticator.hasTeam();
        context.isOnTeam = authenticator.hasTeam();
        context.isAuthor = authenticator.getUserId() === teamInfo._acl.creator;
        context.name = teamInfo.name;
        context.comment = teamInfo.comment;
        context.members = membersInfo;
        context.teamId = teamInfo._id;

        teamsService.showInfo(`Details for ${context.name} listed.`);

        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            teamControls: './templates/catalog/teamControls.hbs',
            teamMember: './templates/catalog/teamMember.hbs'
        }).then(function () {
            this.partial('./templates/catalog/details.hbs');
        });
    }).catch(teamsService.handleError);

    async function getTeamInfo() {
        let [teamDetails, teamMembers] = await Promise.all([
            teamsService.loadTeamDetails(teamId),
            teamsService.loadTeamMembers(teamId),
        ]);
        teamInfo = teamDetails;
        membersInfo = teamMembers;
    }
};

viewControllers.createTeamGetController = function (context) {
    context.loggedIn = authenticator.isAuth();
    context.username = sessionStorage.getItem('username');

    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        createForm: './templates/create/createForm.hbs'
    }).then(function () {
        this.partial('./templates/create/createPage.hbs');
    });
};

viewControllers.createTeamPostController = function (context) {
    let name = context.params.name;
    let comment = context.params.comment;
    teamsService.createTeam(name, comment).then(res => {
        teamsService.joinTeam(res._id).then(() => {
            sessionStorage.setItem('teamId', res._id);
            teamsService.showInfo(`Team ${name} successfully created.`);
            context.redirect('#/home');
        }).catch(teamsService.handleError);
    }).catch(teamsService.handleError);
};

viewControllers.editTeamGetController = function (context) {
    context.loggedIn = authenticator.isAuth();
    context.username = sessionStorage.getItem('username');
    context.teamId = context.params.teamId.slice(1);

    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        editForm: './templates/edit/editForm.hbs'
    }).then(function () {
        this.partial('./templates/edit/editPage.hbs');
    });
};

viewControllers.editTeamPostController = function (context) {
    let teamId = context.params.teamId.slice(1);
    let name = context.params.name;
    let comment = context.params.comment;

    teamsService.editTeam(teamId, name, comment).then(() => {
        teamsService.showInfo(`Team ${name} successfully edited.`);
        context.redirect('#/home');
    }).catch(teamsService.handleError);
};

viewControllers.joinTeamController = function (context) {
    let teamId = context.teamId = context.params.teamId.slice(1);
    teamsService.joinTeam(teamId).then(res => {
        sessionStorage.setItem('teamId', res.teamId);
        teamsService.showInfo(`Join successful.`);
        context.redirect('#/home');
    }).catch(teamsService.handleError);
};

viewControllers.leaveTeamController = function (context) {
    teamsService.leaveTeam().then(() => {
        sessionStorage.removeItem('teamId');
        teamsService.showInfo(`Team successfully left.`);
        context.redirect('#/home');
    }).catch(teamsService.handleError);
};