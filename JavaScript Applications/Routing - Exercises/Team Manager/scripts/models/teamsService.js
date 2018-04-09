let teamsService = (() => {
    function loadTeams() {
        return requester.get('appdata', 'teams/', 'kinvey');
    }

    function loadTeamDetails(teamId) {
        return requester.get('appdata', 'teams/' + teamId, 'kinvey');
    }

    function loadTeamMembers(teamId) {
        let query = `?query={"teamId":"${teamId}"}`;
        return requester.get('user', query, 'kinvey');
    }

    function editTeam(teamId, name, description) {
        let teamData = {
            name: name,
            comment: description
        };

        return requester.update('appdata', 'teams/' + teamId, 'kinvey', teamData);
    }

    function createTeam(name, comment) {
        let teamData = {
            name: name,
            comment: comment
        };

        return requester.post('appdata', 'teams/', 'kinvey', teamData);
    }

    function joinTeam(teamId) {
        let userData = {
            username: sessionStorage.getItem('username'),
            teamId: teamId
        };

        return requester.update('user', sessionStorage.getItem('userId'), 'kinvey', userData);
    }

    function leaveTeam() {
        let userData = {
            username: sessionStorage.getItem('username')
        };

        return requester.update('user', sessionStorage.getItem('userId'), 'kinvey', userData);
    }


    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    return {
        loadTeams,
        loadTeamDetails,
        loadTeamMembers,
        editTeam,
        createTeam,
        joinTeam,
        leaveTeam,
        handleError,
        showInfo,
        showError
    };
})();