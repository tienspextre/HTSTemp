document.getElementById('nextPageBtn').addEventListener('click', function() {
    changePage(1);
  });

  document.getElementById('prevPageBtn').addEventListener('click', function() {
    changePage(-1);
  });

  function changePage(change) {
    // Get the current page number
    var currentPage = document.getElementById('pageNumber').textContent;
    var pageNumber = parseInt(currentPage.split('/')[0].trim());
    var totalPages = 4  ; // Total number of pages

    // Increment or decrement page number and update the display
    pageNumber += change;
    if (pageNumber < 1) {
      pageNumber = 1;
    } else if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }
    document.getElementById('pageNumber').textContent = ('0' + pageNumber).slice(-3) + '/' + ('0' + totalPages).slice(-3);

    if (pageNumber === 1) {
        document.getElementById('prevPageBtn').style.backgroundColor = '#d4cfd4';
        document.getElementById('nextPageBtn').style.backgroundColor = '#ff0b33'; 
    } 
    else if (pageNumber === totalPages) {
        document.getElementById('prevPageBtn').style.backgroundColor = '#ff0b33';
        document.getElementById('nextPageBtn').style.backgroundColor = '#d4cfd4';
    }
    else {
        document.getElementById('prevPageBtn').style.backgroundColor = '#ff0b33';
        document.getElementById('nextPageBtn').style.backgroundColor = '#ff0b33';
    }
    
    
  }

function hidePreview() {
    document.getElementById('preview').style.display = 'none';
}

function showPreview() {
    document.getElementById('preview').style.display = 'block';
}