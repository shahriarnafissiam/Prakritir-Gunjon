// ===== Scroll korle card gula ek ek kore fade in =====
(function () {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);   // ekbar dekhale ar ulta jabe na
            }
        });
    }, { threshold: 0.15 });

    items.forEach(function (el) { observer.observe(el); });
})();

// ===== Navbar link e click korle page fade out hoye tarpor jabe =====
document.querySelectorAll(".navbar a").forEach(function (link) {
    link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || link.classList.contains("active")) return;
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;   // new tab e khulle kichu korbe na

        e.preventDefault();
        document.body.classList.add("leaving");
        setTimeout(function () { window.location.href = href; }, 450);
    });
});

// Browser er Back button chaple page jeno fade out obosthay atke na thake
window.addEventListener("pageshow", function (e) {
    if (e.persisted) document.body.classList.remove("leaving");
});
// ===== Footer: shob page e auto boshbe, bochor auto bodlabe =====
(function () {
    if (document.querySelector(".site-footer")) return;

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML =
    
      "© " + new Date().getFullYear().toLocaleString("bn-BD", { useGrouping: false }) +
        " <b>প্রকৃতির গুঞ্জন</b>। সর্বস্বত্ব সংরক্ষিত।";
    document.body.appendChild(footer);
})();