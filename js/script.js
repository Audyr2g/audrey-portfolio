/* ==========================================================
   Academic ePortfolio
   script.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeDarkMode();
    initializeBackToTop();
    initializeScrollReveal();
    initializeNavbar();
    initializeSmoothScroll();
    initializeActiveNav();
    initializeMobileMenu();
    initializeLightbox();
    initializeAccessibility();

});

/* ==========================================================
   DARK MODE
========================================================== */

function initializeDarkMode() {

    const body = document.body;
    const toggle = document.getElementById("darkModeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        updateThemeIcon(toggle, true);
    }

    if (!toggle) return;

    toggle.addEventListener("click", () => {

        body.classList.toggle("dark-mode");

        const dark = body.classList.contains("dark-mode");

        localStorage.setItem("theme", dark ? "dark" : "light");

        updateThemeIcon(toggle, dark);

    });

}

function updateThemeIcon(button, dark) {

    if (!button) return;

    button.innerHTML = dark
        ? '<i class="bi bi-sun-fill"></i>'
        : '<i class="bi bi-moon-stars-fill"></i>';

}

/* ==========================================================
   BACK TO TOP
========================================================== */

function initializeBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* ==========================================================
   STICKY NAVBAR
========================================================== */

function initializeNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.classList.add("shadow");

        } else {

            navbar.classList.remove("shadow");

        }

    });

}

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function initializeActiveNav() {

    const current = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        const href = link.getAttribute("href");

        if (href === current) {

            link.classList.add("active");

        }

    });

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initializeSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}

/* ==========================================================
   MOBILE NAVIGATION
========================================================== */

function initializeMobileMenu() {

    const nav = document.querySelector(".navbar-collapse");

    if (!nav) return;

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 992) {

                const collapse = bootstrap.Collapse.getInstance(nav);

                if (collapse) {

                    collapse.hide();

                }

            }

        });

    });

}

/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initializeScrollReveal() {

    const elements = document.querySelectorAll(

        ".fade-up, .card-custom, .feature-card, .dashboard-card, .project-card, .timeline-item, .certificate-card"

    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    elements.forEach(el => observer.observe(el));

}

/* ==========================================================
   IMAGE LIGHTBOX
========================================================== */

function initializeLightbox() {

    const lightbox = document.querySelector(".lightbox");

    if (!lightbox) return;

    const lightboxImage = lightbox.querySelector("img");

    document.querySelectorAll("[data-lightbox]").forEach(image => {

        image.addEventListener("click", () => {

            lightboxImage.src = image.src;

            lightbox.classList.add("active");

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}

/* ==========================================================
   ACCESSIBILITY
========================================================== */

function initializeAccessibility() {

    document.addEventListener("keyup", event => {

        if (event.key === "Escape") {

            const lightbox = document.querySelector(".lightbox");

            if (lightbox) {

                lightbox.classList.remove("active");

            }

        }

    });

}

/* ==========================================================
   OPTIONAL PAGE FADE
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================================
   CURRENT YEAR
========================================================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}