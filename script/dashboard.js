const accordionBtnToggle = document.querySelectorAll('[id*="chuong"]');


// Adding event listener to the accordion toggle button
for (i of accordionBtnToggle) {
    i.addEventListener("click", accordionToggleFunction);
}

  // function to open an accordion
function accordionToggleFunction() {
    var id = this.id;
    var iconId = id + "_icon";
    var icon = document.getElementById(iconId);
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      icon.src = 'img/vector-14.svg';
      icon.class = 'vector-4';
    } else {
      panel.style.display = "block";
      icon.src = 'img/vector-16.svg';
      icon.class = 'vector-6';
    }
    // this.children[0].classList.toggle("toggleIcon");
}
  