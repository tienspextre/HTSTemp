// Add click event listener to show confirmation button
var showConfirmationButton = document.getElementById('submitBtn');
showConfirmationButton.addEventListener('click', showConfirmation);

// Add click event listener to cancel button
var cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', hideConfirmation);
var confirmButton = document.getElementById('confirmButton');

function onConfirmClick() {
    // Perform your action when the confirmation button is clicked
    // For now, let's just hide the confirmation box
    hideConfirmation();
    window.location.href = 'xem_diem_1.html';
};

function showConfirmation() {
    var dim = document.getElementById('dim');
    var confirmationBox = document.getElementById('confirmationBox');

    // Display overlay and confirmation box
    dim.style.display = 'block';
    confirmationBox.style.display = 'inline-flex';
}

// Function to hide the overlay and confirmation box
function hideConfirmation() {
    var dim = document.getElementById('dim');
    var confirmationBox = document.getElementById('confirmationBox');

    // Hide overlay and confirmation box
    dim.style.display = 'none';
    confirmationBox.style.display = 'none';
}

