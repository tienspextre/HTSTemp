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