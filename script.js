document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Fade Reveal Animation on Scroll ---
    const revealElements = document.querySelectorAll('.fade-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 2. FAQ Accordion ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle current active class
            header.classList.toggle('active');
            
            // Get the corresponding content
            const content = header.nextElementSibling;
            
            if (header.classList.contains('active')) {
                // Expand
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // Collapse
                content.style.maxHeight = "0";
            }
        });
    });

    // --- 3. Sticky Mobile CTA ---
    const stickyCta = document.getElementById('sticky-cta');
    const heroSection = document.querySelector('.hero');
    
    if (stickyCta && heroSection) {
        // Only show sticky CTA after scrolling past the hero section
        window.addEventListener('scroll', () => {
            // Only relevant for mobile/tablet where sticky-cta is display: flex
            if (window.innerWidth < 768) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                
                if (heroBottom < 0) {
                    stickyCta.classList.add('visible');
                } else {
                    stickyCta.classList.remove('visible');
                }
            }
        });
    }

});
