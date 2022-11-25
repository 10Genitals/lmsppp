const links = [
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

const footer          = "If there are incorrect, missing, or outdated info/links, please contact audr.";
const icon            = './static/favicon.ico';
const headerImg       = './static/prayge.png';
const lastCommitBadge = 'https://badgen.net/github/last-commit/10genitals/lmsppp/';
const repositoryURL   = 'https://github.com/10Genitals/lmsppp/';

// Executed when page loads
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.prepend(createNavBar());
    body.prepend(createLCBadge());
    body.prepend(createHeader());
    body.append(createFooter());
    setIcon();
});

// Create a header that appears at the top of the page
function createHeader()
{
    // Create a container for centralizing
    const div = document.createElement('div');
    div.classList.add('center')

    // Create image
    const img = document.createElement('img');
    img.src = headerImg;
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

// idk man
function createFooter()
{
    const div = document.createElement('div');
    div.innerHTML = footer;
    div.classList.add('center')
    div.id = 'footer'

    return div;
}

// Creates an iframe to display last commit badge of this repository
function createLCBadge()
{
    const img = document.createElement('img')
    img.src = lastCommitBadge;

    const anchor = document.createElement('a');
    anchor.appendChild(img);
    anchor.href = repositoryURL + 'commits/master/';

    const div = document.createElement('div');
    div.appendChild(anchor);
    div.classList.add('center');

    return div;
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
    link.href = icon;
}
