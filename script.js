const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll(".nav-link");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");
const currentYear = document.querySelector("#current-year");

if (currentYear) currentYear.textContent = new Date().getFullYear();

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name")?.value.trim() || "amigo(a)";
    formFeedback.textContent = "Mensagem recebida, " + name + "! Este formulário é demonstrativo e não envia dados para um servidor.";
    contactForm.reset();
  });
}

const sections = document.querySelectorAll("main section[id]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => observer.observe(section));