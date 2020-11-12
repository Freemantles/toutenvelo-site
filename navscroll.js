function toggleMenu() {
  var menuBox = document.getElementById('mobile-nav-popup');
  var menuIconOpen = document.getElementById('hamb-menu-open');
  var menuIconClose = document.getElementById('hamb-menu-close');
  if(menuBox.style.display == "none") {
    menuBox.style.display = "block";
    menuIconOpen.style.opacity = "0";
    menuIconClose.style.opacity = "1";
  }
  else {
    menuBox.style.display = "none";
    menuIconOpen.style.opacity = "1";
    menuIconClose.style.opacity = "0";
  }
}


function closeMenu() {
	var menuBox = document.getElementById('mobile-nav-popup');
		menuBox.style.display = "none";
}