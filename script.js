const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const closeButton = lightbox?.querySelector(".close");
const topbar = document.querySelector(".topbar");

const syncTopbar = () => {
  const hashIsSection = Boolean(window.location.hash && window.location.hash !== "#top");
  topbar?.classList.toggle("is-scrolled", window.scrollY > 80 || hashIsSection);
};

syncTopbar();
window.addEventListener("scroll", syncTopbar, { passive: true });
window.addEventListener("hashchange", syncTopbar);

document.querySelectorAll(".photo").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = button.dataset.src;
    lightboxImage.alt = button.querySelector("img")?.alt || "";
    lightbox.showModal();
  });
});

closeButton?.addEventListener("click", () => lightbox?.close());

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
