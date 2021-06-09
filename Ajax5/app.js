async function getdata() {

    const Response = await fetch("https://api.github.com/users/bellaouali")
    const data = await Response.json()

    document.querySelector('#content').innerHTML = `

    <h1>${data.login}</h1>
    <h1>${data.created_at.indexOf('T')}</h1>
    <h1>${data.created_at.slice(0, data.created_at.indexOf('T'))}</h1>
    `;

}
getdata()