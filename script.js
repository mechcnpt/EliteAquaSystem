document.addEventListener("DOMContentLoaded", function () {
    // Navbar Animation
    gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });

    // Hero Section Animation
    gsap.from(".hero h1", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power3.out" });
    gsap.from(".hero p", { duration: 1, y: 30, opacity: 0, delay: 0.7, ease: "power3.out" });
    gsap.from(".hero .btn", { duration: 1, scale: 0.5, opacity: 0, delay: 1, ease: "back.out(1.7)" });

    // About Us Section Animation
    gsap.from("#about h2", { duration: 1, x: -100, opacity: 0, delay: 1.2, ease: "power3.out" });

    gsap.utils.toArray("#about .col-md-4").forEach((col, index) => {
        gsap.from(col, {
            duration: 1,
            x: index % 2 === 0 ? -100 : 100, 
            opacity: 0,
            delay: 1.5 + index * 0.3,
            ease: "power3.out",
        });
    });

    // Smooth Scroll
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                gsap.to(window, { duration: 1, scrollTo: target, ease: "power2.out" });
            }
        });
    });
});

// about us section in index.html
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("#about .col-md-4");

    sections.forEach((section) => {
        section.addEventListener("mouseenter", function () {
            gsap.to(sections, { duration: 0.5, scale: 0.9, opacity: 0.7 });
            gsap.to(this, { duration: 0.5, scale: 1.2, opacity: 1 });
        });

        section.addEventListener("mouseleave", function () {
            gsap.to(sections, { duration: 0.5, scale: 1, opacity: 1 });
        });
    });
});


// product.html
document.addEventListener("DOMContentLoaded", function () {
    gsap.from("#products .col-md-4", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3, // Adds delay between animations
    });

    // Hover Animation
    const products = document.querySelectorAll("#products .col-md-4");
    products.forEach((product) => {
        product.addEventListener("mouseenter", () => {
            gsap.to(product, { scale: 1.1, duration: 0.3 });
        });

        product.addEventListener("mouseleave", () => {
            gsap.to(product, { scale: 1, duration: 0.3 });
        });
    });
});

