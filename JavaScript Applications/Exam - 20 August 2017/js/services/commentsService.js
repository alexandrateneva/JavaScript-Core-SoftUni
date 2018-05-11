let comments = (() => {

    function createComment(postId, author, content) {
        const endpoint = 'comments';
        let data = {postId, author, content};

        return remote.post('appdata', endpoint, 'kinvey', data);
    }

    function getCommentsByPostId(postId) {
        const endpoint = `comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function deleteCommentById(commentId) {
        const endpoint = `comments/${commentId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    return {
        createComment,
        getCommentsByPostId,
        deleteCommentById
    }
})();