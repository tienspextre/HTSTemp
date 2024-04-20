const accordionBtnToggle = document.querySelectorAll('[id*="chuong"]');
console.log(accordionBtnToggle);

// Adding event listener to the accordion toggle button
for (i of accordionBtnToggle) {
    i.addEventListener("click", accordionToggleFunction);
}

  // function to open an accordion
function accordionToggleFunction() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    // this.children[0].classList.toggle("toggleIcon");
}
  