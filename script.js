const menuButton = document.querySelector(".menu-hotspot");
const menu = document.querySelector(".site-menu");
const closeLayer = document.querySelector(".menu-close-layer");
const commentCopy = document.querySelector(".comment-copy");

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

const loadComment = async () => {
  if (!commentCopy) return;

  try {
    const response = await fetch(`comment.txt?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;

    const text = (await response.text()).trim();
    if (text) {
      commentCopy.textContent = text;
    }
  } catch {
    commentCopy.textContent = commentCopy.dataset.defaultComment;
  }
};

loadComment();
