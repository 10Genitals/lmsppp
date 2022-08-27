var links = [
    {
        "title": "Home",
        "url":   "./index.html"
    },

    {
        "title": "Schedule",
        "url":   "./schedule.html"
    },

    {
        "title": "LMS",
        "url":   "https://ljcsi.obbserver.com/lms/my/"
    },
];

// Executed when page loads
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.prepend(createNavBar());
    body.prepend(createHeader());
    setIcon();

    links = undefined;  // this saves memory i think
});

// Create a header that appears at the top of the page
function createHeader()
{
    // Create a container for centralizing
    const div = document.createElement('div');
    div.style.setProperty('text-align', 'center');

    // Create image
    const img = document.createElement('img');
    img.src = './static/prayge.png'
    img.alt = 'prayge';
    img.style.width = '64px';
    img.style.height = '64px';

    // Append to div and return
    div.appendChild(img);
    return div;
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

// Set a favicon
function setIcon()
{
    // Check if link tag exists
    var link = document.querySelector("link[rel~='icon']");

    // Create if not
    if (!link)
    {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }

    // Set favicon
    link.href = './static/favicon.ico';
}
