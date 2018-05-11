let chirper = (() => {
    function getAllChirpsByFollowers(subs) {
        const endpoint = `chirps?query={"author":{"$in": [${subs}]}}&sort={"_kmd.ect": 1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getUserById(userId) {
        return remote.get('user', userId, 'kinvey');
    }

    function createChirp(author, text) {
        let data = {author, text};

        return remote.post('appdata', 'chirps', 'kinvey', data);
    }

    function getUserChirps(username) {
        const endpoint = `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getChirpsCount(username) {
        const endpoint = `chirps?query={"author":"${username}"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getFollowingCount(username) {
        const endpoint = `?query={"username":"${username}"}`;

        return remote.get('user', endpoint, 'kinvey');
    }

    function getFollowerCount(username) {
        const endpoint = `?query={"subscriptions":"${username}"}`;

        return remote.get('user', endpoint, 'kinvey');
    }

    function getAllUsers() {
        const endpoint = '';

        return remote.get('user', endpoint, 'kinvey');
    }

    function followAndUnfollow(userId, subs) {
        return remote.update('user', userId, 'kinvey', {subscriptions: subs});
    }

    return {
        getAllChirpsByFollowers,
        getUserById,
        createChirp,
        getUserChirps,
        getAllUsers,
        getChirpsCount,
        getFollowerCount,
        getFollowingCount,
        followAndUnfollow
    }
})();