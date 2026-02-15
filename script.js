/* MOBILE MENU */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* SCROLL ANIMATION */
const animatedItems = document.querySelectorAll(
  ".hero, .about-us, .contact-info, .contact-form, main, section, .carousel"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedItems.forEach(item => observer.observe(item));

