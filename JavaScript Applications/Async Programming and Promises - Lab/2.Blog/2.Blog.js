function attachEvents() {
    const kinveyAppId = "kid_ryRQXNBcf";
    const serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId;
    const kinveyUsername = "Peter";
    const kinveyPassword = "p";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {"Authorization": "Basic " + base64auth};
    let posts = [];

    $("#btnLoadPosts").click(loadPosts);
    $("#btnViewPost").click(viewPostInfo);


    function loadPosts() {
        let postsList = $('#posts');
        postsList.empty();

        $.ajax({
            url: serviceUrl + "/posts",
            headers: authHeaders,
            success: displayPosts,
            error: displayError
        });

        function displayPosts(res) {
            for (let post of res) {
                posts.push(post);
                let option = $(`<option value="${post._id}">${post.title}</option>`)
                postsList.append(option);
            }
        }
    }

    function viewPostInfo() {
        let selectedPostId = $('#posts').val();
        let selectedPost = posts.find(p => p._id === selectedPostId);

        let listComments = $('#post-comments');
        listComments.empty();

        $.ajax({
            url: serviceUrl + `/comments/?query={"post_id":"${selectedPostId}"}`,
            headers: authHeaders,
            success: displayPostInfo,
            error: displayError
        });

        function displayPostInfo(res) {
            let postTitle = $('#post-title').text(selectedPost.title);
            let postBody = $('#post-body').text(selectedPost.body);
            for (let comment of res) {
                let li = $(`<li>${comment.text}</li>`);
                listComments.append(li);
            }
        }
    }

    function displayError(error) {
        let errorDiv = $("<div>").text(`Error ${error.status} (${error.statusText})`);
        $(document.body).prepend(errorDiv);
        setTimeout(function () {
            $(errorDiv).remove();
        }, 3000);
    }
}