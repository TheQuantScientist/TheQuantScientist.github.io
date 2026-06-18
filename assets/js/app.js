const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-site-nav]");
const navLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
const sections = [...document.querySelectorAll("main .section[id]")];
const revealSections = document.querySelectorAll(".section");
const year = document.querySelector("[data-year]");
const backToTop = document.querySelector("[data-back-to-top]");

if (year) {
    year.textContent = new Date().getFullYear();
}

navToggle?.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav?.classList.toggle("open", !expanded);
    document.body.classList.toggle("nav-open", !expanded);
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navToggle?.setAttribute("aria-expanded", "false");
        nav?.classList.remove("open");
        document.body.classList.remove("nav-open");
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

revealSections.forEach((section) => revealObserver.observe(section));

const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const active = navLinks.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
        navLinks.forEach((link) => link.classList.toggle("active", link === active));
    });
}, { threshold: 0.35, rootMargin: "-20% 0px -55% 0px" });

sections.forEach((section) => activeObserver.observe(section));

backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
}, { passive: true });
