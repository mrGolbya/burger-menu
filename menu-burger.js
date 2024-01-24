const NAV = document.querySelector(".line-2");
const MOBILE_MENU = <div class="mobile-menu-toggler"><span></span></div>

MOBILE_MENU.addEventListener("click", () => {
  this.classList.toggle("active");
  NAV.classList.toggle("active");
});


