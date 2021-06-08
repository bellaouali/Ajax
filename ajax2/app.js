document.getElementById('button1').addEventListener('click', loadusers);
// Load users
function loadusers() {
    //object for update parts of a web page
    const xhr = new XMLHttpRequest();
    // Specifies the type of request, 
    xhr.open('GET', 'https://api.github.com/users', true);
    //function to execute when the response is ready in the onreadystatechange event
    xhr.onreadystatechange = function() {
            // called automatically each time the readyState property changes
            if (this.readyState == 4 && this.status == 200) {
                //method parses a string and returns a JavaScript object
                const users = JSON.parse(this.responseText);

                let printr = '';
                users.forEach(function(us) {
                    printr += `

        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${us.avatar_url}">
            <a href="${us.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <li class="badge badge-primary">Public Repos: ${us.public_repos}</li>
            <li class="badge badge-secondary">Public Gists: ${us.public_gists}</li>
            <li class="badge badge-success">Followers: ${us.followers}</li>
            <li class="badge badge-info">Following: ${us.following}</li>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${us.company}</li>
              <li class="list-group-item">Website/Blog: ${us.blog}</li>
              <li class="list-group-item">Location: ${us.location}</li>
              <li class="list-group-item">Member Since: ${us.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      `;


                });

                document.getElementById('print').innerHTML = printr;
            }
        }
        //Send a Request To a Server
    xhr.send();
}




document.getElementById('button2').addEventListener('click', loadRepo);

// Load users
function loadRepo() {
    //object for update parts of a web page
    const xhr = new XMLHttpRequest();
    // Specifies the type of request, 
    xhr.open('GET', 'https://api.github.com/users/bellaouali/repos', true);
    //function to execute when the response is ready in the onreadystatechange event
    xhr.onreadystatechange = function() {
            // called automatically each time the readyState property changes
            if (this.readyState == 4 && this.status == 200) {
                //method parses a string and returns a JavaScript object
                const users = JSON.parse(this.responseText);

                let printr = '';
                users.forEach(function(re) {
                    printr += `

      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${re.avatar_url}">
          <a href="${re.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <li class="badge badge-primary">Public Repos: ${re.public_repos}</li>
          <li class="badge badge-secondary">Public Gists: ${re.public_gists}</li>
          <li class="badge badge-success">Followers: ${re.followers}</li>
          <li class="badge badge-info">Following: ${re.following}</li>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${re.company}</li>
            <li class="list-group-item">Website/Blog: ${re.blog}</li>
            <li class="list-group-item">Location: ${re.location}</li>
            <li class="list-group-item">Member Since: ${re.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    `;

                });

                document.getElementById('print').innerHTML = printr;
            }
        }
        //Send a Request To a Server
    xhr.send();
    $.get("data/dataTest.txt", function(data) { $(".content").html(data) })

}