function showConfirmation() {
    var overlay = document.getElementById('lam_bai');
    var confirmationBox = document.getElementById('confirmationBox');

    // Display overlay and confirmation box
    overlay.style.display = 'block';
    confirmationBox.style.display = 'block';
}

// Function to hide the overlay and confirmation box
function hideConfirmation() {
    var overlay = document.getElementById('lam_bai');
    var confirmationBox = document.getElementById('confirmationBox');

    // Hide overlay and confirmation box
    overlay.style.display = 'none';
    confirmationBox.style.display = 'none';
}

// Add click event listener to show confirmation button
var showConfirmationButton = document.getElementById('submitBtn');
showConfirmationButton.addEventListener('click', showConfirmation);

// Add click event listener to cancel button
var cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', hideConfirmation);

// Add click event listener to confirm button
var confirmButton = document.getElementById('confirmButton');
confirmButton.addEventListener('click', function() {
    // Perform your action when the confirmation button is clicked
    // For now, let's just hide the confirmation box
    hideConfirmation();
    // alert('Bài đã được nộp!');
});

function loadHeaderAndFooter() {
    // load header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            console.log('load header successfully');

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
document.addEventListener('DOMContentLoaded', function() {
    loadHeaderAndFooter();
});