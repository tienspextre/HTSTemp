const accordionBtnToggle = document.querySelectorAll('[id*="chuong"]');

// Adding event listener to the accordion toggle button
for (i of accordionBtnToggle) {
    i.addEventListener("click", accordionToggleFunction);
}

  // function to open an accordion
function accordionToggleFunction() {
    this.nextElementSibling.classList.toggle("active");
    // this.children[0].classList.toggle("toggleIcon");
}
  