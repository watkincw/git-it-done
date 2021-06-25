const getuserRepos = function(user) {
    // format the github apu url
    const apiUrl = "https://api.github.com/users/" + user + "/repos";
    
    // make a request to the url
    fetch(apiUrl).then(function(response) { 
        response.json().then(function(data) { 
            console.log(data);
        });
    });
};

getuserRepos("watkincw");