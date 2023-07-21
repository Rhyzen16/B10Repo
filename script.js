function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const offset = 80; // Offset to account for the fixed header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});

/* ... Your existing JavaScript code ... */
