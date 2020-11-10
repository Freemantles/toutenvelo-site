function toggleMenu() {
  var menuBox = document.getElementById('mobile-nav-popup');
  var menuIcon = document.getElementById('hamb-menu');
  if(menuBox.style.display == "none") {
    menuBox.style.display = "block";
    menuIcon.src = "close.svg"
  }
  else {
    menuBox.style.display = "none";
    menuIcon.src = "mobile-menu.svg"
  }
}