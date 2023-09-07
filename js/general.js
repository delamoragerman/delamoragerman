// Manejo del desplazamiento suave para todos los enlaces internos
document.addEventListener("DOMContentLoaded", function() {
  const scrollTopBtn = document.querySelector(".scroll-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });
});

  // Manejo del desplazamiento suave para todos los enlaces internos
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
