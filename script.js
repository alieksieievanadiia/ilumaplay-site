const copy = {
  en: {
    intro:
      "IlumaPlay is an interactive lamp with collectible figures and discovery cards. Children need a task, find the matching figure and place it on the lamp to remember what they learned.",
    tagline: "Build your collection! Explore worlds",
    contact: "Contact us:",
    lang: "en",
    description:
      "IlumaPlay is an interactive lamp with collectible figures and discovery cards for children.",
  },
  pt: {
    intro:
      "A IlumaPlay é um candeeiro interativo com figuras colecionáveis e cartas de descoberta. As crianças recebem uma tarefa, encontram a figura certa e colocam-na no candeeiro para recordar o que aprenderam.",
    tagline: "Constrói a tua coleção! Explora mundos",
    contact: "Contacte-nos:",
    lang: "pt-PT",
    description:
      "A IlumaPlay é um candeeiro interativo com figuras colecionáveis e cartas de descoberta para crianças.",
  },
};

const setLanguage = (lang) => {
  const chosen = copy[lang] ? lang : "en";
  document.documentElement.lang = copy[chosen].lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[chosen][key];
  });
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", copy[chosen].description);
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === chosen);
  });
  localStorage.setItem("ilumaplay-language", chosen);
};

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("ilumaplay-language");
setLanguage(savedLanguage || "en");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const closeButton = lightbox?.querySelector(".close");

document.querySelectorAll(".thumb").forEach((button) => {
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
