// Select key UI elements for menu and navigation behavior
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("main section[id]");
const yearElement = document.getElementById("year");

// Insert current year into footer text
yearElement.textContent = new Date().getFullYear();

// Open/close mobile menu when the menu button is clicked
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile menu when any navigation link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Highlight the active nav link based on current section in viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const activeId = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("active", isActive);
      });
    });
  },
  {
    threshold: 0.55
  }
);

sections.forEach((section) => observer.observe(section));

