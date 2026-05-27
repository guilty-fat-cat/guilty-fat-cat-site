const menuButton = document.querySelector(".menu-hotspot");
const menu = document.querySelector(".site-menu");
const closeLayer = document.querySelector(".menu-close-layer");

const setMenuOpen = (isOpen) => {
  menu.classList.toggle("is-open", isOpen);
  closeLayer.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
};

menuButton.addEventListener("click", () => {
  setMenuOpen(!menu.classList.contains("is-open"));
});

closeLayer.addEventListener("click", () => {
  setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});
