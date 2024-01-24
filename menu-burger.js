const NAV = document.querySelector(".line-2");
const MOBILE_MENU = document.querySelector(".mobile-menu-toggler")

MOBILE_MENU.addEventListener("click", () => {
  MOBILE_MENU.classList.toggle("active");
  NAV.classList.toggle("active");
});


