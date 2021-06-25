const getuserRepos = function() { 
    fetch("https://api.github.com/users/octocat/repos");
}

getuserRepos();