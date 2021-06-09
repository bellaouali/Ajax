async function fetchdata() {
    const response = await fetch("https://api.github.com/users/bellaouali")
    const data = await response.json()
    console.log(data)
    document.querySelector("#content").innerHTML = `
    <div>
        <img src="${data.avatar_url}">
    </div>
        <div>
            <ul>
                <li>Repos: ${data.public_repos}</li><br>
                <li>Gists: ${data.public_gists}</li><br>
                <li>Followers: ${data.followers}</li><br>
                <li>Following: ${data.following}</li><br>
                <li>Company: ${data.company}</li><br>
                <li>Website/Blog: ${data.blog}</li><br>
                <li>Location: ${data.location}</li><br>
                <li>Time:${data.created_at}</li><br>
            </ul>
        </div>
    </div>

  `;

}
fetchdata();