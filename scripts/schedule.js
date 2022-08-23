// Extends schedule.html

// Executed when page loads
document.addEventListener('DOMContentLoaded', () => {
    var lastModality = Number(localStorage.getItem('last-modality'));

    // Handle invalid values
    if (!lastModality) {
        lastModality = 0;
    }

    // Set modality based on last option
    toggleModality(lastModality);
});

// Change table based on i
function toggleModality(i)
{
    const hybrid = document.getElementById('hybrid');   // 0
    const blended = document.getElementById('blended'); // 1
    switch (i)
    {
        case 0:
            hybrid.style.display = 'block';
            blended.style.display = 'none';
            break;
        case 1:
            hybrid.style.display = 'none';
            blended.style.display = 'block';
            break;
    }

    // Store chosen modality
    localStorage.setItem('last-modality', i);
}
