// Extends index.html

/* var subject = ... in subject.js */

// Executed when page loads
document.addEventListener('DOMContentLoaded', () => {
    initMain();
    subjects = undefined;    // this saves memory i think
});


// Creates buttons and appends to main section
function initMain()
{
    const main = document.getElementById('main');

    for (const subject of subjects)
    {
        const button = createButton(subject);
        main.appendChild(button);
    }
}

// Creates a button for a subject
function createButton(subject)
{
    // Create container
    const main = document.createElement('div');
    main.setAttribute('class', 'dropdown');
//  main.setAttribute('tabindex', '0');

    // Create button
    const button = document.createElement('div');
    button.setAttribute('class', 'dropdown-button');
    button.innerHTML = subject.name;
    main.appendChild(button)

    // Create contents container
    const contents = document.createElement('div');
    contents.setAttribute('class', 'dropdown-contents');
    main.appendChild(contents);

    // Create main link if provided
    if (subject.main)
    {
        const mainLink = document.createElement('a');
        mainLink.innerHTML = 'Main';
        mainLink.setAttribute('href', subject.main);
        mainLink.setAttribute('target', '_blank');
        contents.appendChild(mainLink);
    }

    // Create all other links
    for (const link of subject.links)
    {
        const anchor = document.createElement('a');
        anchor.innerHTML = link.title;
        anchor.setAttribute('href', link.url);
        anchor.setAttribute('target', '_blank');
        contents.appendChild(anchor);
    }

    // Return button
    return main;
}
