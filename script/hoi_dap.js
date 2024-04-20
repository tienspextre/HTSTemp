function toggleReviewBox() {
    var dim = document.getElementById('dim');
    var reviewBox = document.getElementById('reviewBox');
    dim.style.display = 'block';
    reviewBox.style.display = 'block';
}

function hideReviewBox() {
    var dim = document.getElementById('dim');
    var reviewBox = document.getElementById('reviewBox');
    dim.style.display = 'none';
    reviewBox.style.display = 'none';
}

function toggleNewBox() {
    var dimBig = document.getElementById('dimBig');
    var NewBox = document.getElementById('newBox');
    dimBig.style.display = 'block';
    NewBox.style.display = 'block';
}

function hideNewBox() {
    var dimBig = document.getElementById('dimBig');
    var NewBox = document.getElementById('newBox');
    dimBig.style.display = 'none';
    NewBox.style.display = 'none';
}

function submitReview() {
    // Your submit logic here
    // alert('Bài đã được nộp!');
    hideReviewBox();
}

