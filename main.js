/**
 * Open and close menu
 */
function showMenu() {
  let Menu = document.getElementById("menu");

  // Change menu icon
  if (Menu.innerHTML === "menu") {
    Menu.innerHTML = "close";
    Menu.style.position = "fixed";
    Menu.style.right = "30px";
  } else {
    Menu.innerHTML = "menu";
    Menu.style.position = "absolute";
  }

  //open and close the navigation
  let Nav = document.getElementById("nav");
  Nav.classList.toggle("small-nav");
}
