// Extends index.html

// Executed when page loads
document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/subjects.json')
        .then((response) => response.json())
        .then((json) => initMain(json.subjects));
});


// Creates buttons and appends to main section
function initMain(subjects)
{
    const linksSection = document.getElementById('links');
    for (const subject of subjects)
    {
        const button = createButton(subject);
        linksSection.appendChild(button);
    }
}

// Creates a button for a subject
function createButton(subject)
{
    // Create container
    const container = document.createElement('div');
    container.setAttribute('class', 'dropdown');
//  container.setAttribute('tabindex', '0');

    // Create button
    const button = document.createElement('div');
    button.setAttribute('class', 'dropdown-button');
    button.innerHTML = subject.name;
    container.appendChild(button)

    // Create contents container
    const contents = document.createElement('div');
    contents.setAttribute('class', 'dropdown-contents');
    container.appendChild(contents);

    // Create main link if provided
    if (subject.main)
    {
        const mainLink = document.createElement('a');
        mainLink.innerHTML = '&#x2605; Main';
        mainLink.href = subject.main;
        mainLink.target = '_blank';
        mainLink.className = 'main-page';
        contents.appendChild(mainLink);
    }

    // Create all other links
    for (const link of subject.links)
    {
        const anchor = document.createElement('a');
        anchor.innerHTML = link.title;
        anchor.href = link.url;
        anchor.target = '_blank';
        contents.appendChild(anchor);
    }

    // Return button
    return container;
}
