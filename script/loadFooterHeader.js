// Get the elements by their IDs
let timeout; // Variable to hold the timeout
let luyentap;
let subluyentap;

function loadHeaderAndFooter() {
    // load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            console.log('load header successfully');
            luyentap = document.getElementById('luyentap');
            subluyentap = document.getElementById('subluyentap');
            // Add event listeners to luyentap
            luyentap.addEventListener('mouseover', showSubLuyenTap);
            luyentap.addEventListener('mouseout', hideSubLuyenTap);

            // Add event listeners to subluyentap
            subluyentap.addEventListener('mouseover', showSubLuyenTap);
            subluyentap.addEventListener('mouseout', hideSubLuyenTap);

        })
        .catch(error => console.error("error loading header"));


    // load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            console.log('load footer successfully');

        })
        .catch(error => console.error("error loading footer"));
}

// Function to show subluyentap
function showSubLuyenTap() {
    clearTimeout(timeout); // Clear any existing timeout
    subluyentap.style.display = 'inline-flex';
}

// Function to hide subluyentap after a delay
function hideSubLuyenTap() {
    // Set a timeout to hide subluyentap after 300 milliseconds
    timeout = setTimeout(() => {
        subluyentap.style.display = 'none';
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    loadHeaderAndFooter();
});
