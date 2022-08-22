var links = [
    {
        "title": "Home",
        "url":   "./index.html"
    },

    {
        "title": "LMS",
        "url":   "https://ljcsi.obbserver.com/lms/my/"
    },
];

// Executed when page loads
document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementsByTagName('body')[0];
    body.prepend(createNavBar());
    body.prepend(createHeader());

    links = undefined;  // this saves memory i think
});

// Create a header that appears at the top of the page
function createHeader()
{
    const h1 = document.createElement('h1');
    h1.innerHTML = "today will be a good day";
    h1.style.setProperty('text-align', 'center');
    return h1;
}

// Create navigation bar
function createNavBar()
{
    const navBar = document.createElement('div');
    navBar.id = 'navbar';
    for (const link of links)
    {
        const navLink = createNavLink(link);
        navBar.appendChild(navLink);
    }

    return navBar;
}

// Create a nav link for createNavBar
function createNavLink(link)
{
    const anchor = document.createElement('a');
    anchor.innerHTML = link.title;
    anchor.href = link.url;

    return anchor;
}
