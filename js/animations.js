// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-out'
    });
});

// Add scroll-based navbar transparency
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Add hover animations for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.feature-icon i').style.animation = 'none';
        setTimeout(() => {
            card.querySelector('.feature-icon i').style.animation = 'pulse 2s infinite';
        }, 10);
    });
});