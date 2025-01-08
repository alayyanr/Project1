// script.js

// Function to toggle the dropdown menu
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = dropdown.style.transform === 'translateY(0)' ? 'translateY(-500px)' : 'translateY(0)';
}

// Function to close the dropdown menu
function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(-500px)';
}

// Optional: Close dropdown when clicking outside of it
window.onclick = function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (!event.target.matches('.hamburg') && !event.target.matches('.link a')) {
        dropdown.style.transform = 'translateY(-500px)';
    }
}