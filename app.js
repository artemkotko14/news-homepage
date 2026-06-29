const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navBar = document.getElementById("mobile-navbar");
const imgOpenMenu = document.getElementById("open-menu");
const imgCloseMenu = document.getElementById("close-menu");
const page = document.querySelector(".page");

openMenu.addEventListener("click", function () {
  navBar.classList.remove("hidden");
  imgCloseMenu.classList.remove("hidden");
  imgOpenMenu.classList.add("hidden");
  page.classList.add("bluish");
  page.setAttribute("inert", "");
});
closeMenu.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  navBar.classList.add("hidden");
  imgCloseMenu.classList.add("hidden");
  imgOpenMenu.classList.remove("hidden");
  page.classList.remove("bluish");
  page.removeAttribute("inert");
}
const desktop = window.matchMedia("(min-width: 950px)");

desktop.addEventListener("change", (e) => {
  if (e.matches) {
    // Screen is now desktop size
    closeMobileMenu();
  }
});
