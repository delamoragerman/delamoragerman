// Manejo del desplazamiento suave para todos los enlaces internos
document.addEventListener("DOMContentLoaded", function () {
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

// Efecto de aparicion clase oculto

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", revealOnScroll);
});

function revealOnScroll() {
    const elementosOcultos = document.querySelectorAll(".oculto");
    elementosOcultos.forEach(function (elemento) {
        if (isElementInViewport(elemento)) {
            elemento.classList.add("aparecer");
        }
    });
}

function isElementInViewport(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
}

