// Init 
const text = new core;
// Init 
const view = new views;
// Search input
const search = document.getElementById('search');
// Search input 
search.addEventListener('keyup', (e) => {
    // Get input text
    const user = e.target.value;

    if (user !== '') {
        // Make http call
        text.getUser(user)
            .then(data => {
                view.Profile(data.profile);
            })
    }
});