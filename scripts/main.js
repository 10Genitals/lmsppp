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
const repositoryURL   = 'https://github.com/10Genitals/lmsppp/';
var lastCommitBadge   = 'https://badgen.net/github/last-commit/10genitals/lmsppp/';

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

    // We capitalize letters in the badge url randomly to force badgen.net to 
    // generate a new badge nearly every time someone opens this website,
    // because it takes a while for them to generate a new badge so the badge
    // will be stuck and outdated. Though it's only useful when it's only
    // been minutes since the last commit, so it might not be worth it.
    // i sure do hope they dont ban my repository for this
    const min = 40;
    const max = 55;
    const amount = rng(1, max - min + 1);

    // Capitalize random letters in the owner and repo part
    for (let i = 0; i < amount; i++)
    {
        const index = rng(min, max);
        lastCommitBadge = lastCommitBadge.slice(0, index) + lastCommitBadge[index].toUpperCase() + lastCommitBadge.slice(index + 1);
        // why the fk is javascript like this
        // why couldnt i just lastCommitBadge[index] = lastCommitBadge.toUpperCase()
        // or even lastCommitBadge[index].toUpperCase()
    }
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

// Returns random number between min and max inclusive
function rng(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
