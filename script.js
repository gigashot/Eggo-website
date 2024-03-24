document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.scroll-section');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Initial check when page loads
    checkScroll();

    // Check when user scrolls
    window.addEventListener('scroll', checkScroll);
});
