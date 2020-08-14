function userInformationHTML(user){
return `
    <h2>${user.name}
        <span class = "small-name">
            (@<a href = "${user.html_url}" target = "_blank">${user.login}</a>)
        </span>
    </h2>
    <div class = "gh-content">
        <div class = "gh-avatar">
            <a href = "${user.html_url}" target = "_blank">
                <img src="${user.avatar_url}" width="80px" height="80px" alt="${user.login}"/>
            </a>
        </div>
        <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>
    </div>
    `
}

function fetchGithubInformation(event){
    var username= $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }     
    $("#gh-user-data").html(
        `<div id="loader" class = "text-center">
            <img style ="width:150px; height:150px;" id="loading" src = "assets/gif/load.gif" alt = "loading..."/>
        </div>`
    );
    $.when(
        $.getJSON(`http://api.github.com/users/${username}`)
    ). then(
        function(response) {
            var userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));
        }, function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(`<h2>No info for user ${username}</h2>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(`<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        }
    )
}