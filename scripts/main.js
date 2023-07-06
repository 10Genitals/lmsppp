const LINKS = [
    {
        "title": "Home",
        "url":   "."
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

const FOOTER         = "Congratulations everyone. GGWP.<br>━ audr";
const ICON_URL       = './static/favicon.ico';
const HEADER_IMG     = './static/prayge.png';
const REPOSITORY_URL = 'https://github.com/10Genitals/lmsppp/';
const LCB_URL        = 'https://badgen.net/github/last-commit/10genitals/lmsppp/';

// Executed when page loads
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.prepend(createNavBar());
    body.prepend(createLCB());
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
    img.src = HEADER_IMG;
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
    for (const link of LINKS)
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
    div.innerHTML = FOOTER;
    div.classList.add('center')
    div.id = 'footer'

    return div;
}

// Creates a div to display last commit badge of this repository
function createLCB()
{
    const img = document.createElement('img')
    img.src = LCB_URL;

    const anchor = document.createElement('a');
    anchor.appendChild(img);
    anchor.href = REPOSITORY_URL + 'commits/master/';

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
    link.href = ICON_URL;
}

// Returns random number between min and max inclusive
function rng(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
