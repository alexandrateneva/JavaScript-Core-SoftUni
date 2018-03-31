function loadCommits() {
    let username = $('#username').val();
    let repository = $('#repo').val();
    let commits = $('#commits');
    commits.empty();

    let URL = `https://api.github.com/repos/${username}/${repository}/commits`;
    $.ajax({
        method: 'GET',
        url: URL,
        success: handleSuccess,
        error: handleError
    });

    function handleSuccess(res) {
        for (let obj of res) {
            let li = $(`<li>${obj.commit.author.name}: ${obj.commit.message}</li>`);
            commits.append(li);
        }
    }

    function handleError(error) {
        let li = $(`<li>Error: ${error.status} (${error.statusText})</li>`);
        commits.append(li);
    }
}