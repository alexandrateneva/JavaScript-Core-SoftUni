let authenticator = (() => {
    function isAuth() {
        return sessionStorage.getItem('authToken') !== null;
    }

    function hasTeam() {
        return sessionStorage.getItem('teamId') !== null;
    }

    function getUserId() {
        return sessionStorage.getItem('userId');
    }

    function saveSession(res) {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('authToken', res._kmd.authtoken);
        sessionStorage.setItem('userId', res._id);
        if (res.teamId !== undefined) {
            sessionStorage.setItem('teamId', res.teamId);
        }
    }

    function clearSession() {
        sessionStorage.clear();
    }

    function register(username, password) {
        let body = {username: username, password: password};
        return requester.post('user', '', 'basic', body);
    }

    function login(username, password) {
        let body = {username: username, password: password};
        return requester.post('user', 'login', 'basic', body);
    }

    function logout() {
        return requester.post('user', '_logout', 'kinvey', {});
    }

    return {
        isAuth,
        hasTeam,
        getUserId,
        saveSession,
        clearSession,
        register,
        login,
        logout
    };
})();