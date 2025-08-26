var typed = new Typed("#element", {
  strings: ["Frontend Developer", "Backend Developer", "Mern Stack developer"],
  typeSpeed: 50,
});
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSectionId = e.target.getAttribute("data-section");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      document.getElementById(targetSectionId).classList.add("active");
    });
  });
});
