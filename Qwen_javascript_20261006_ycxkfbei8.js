// Scroll effect for the mission box
const missionBox = document.getElementById('missionBox');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDiff = currentScrollY - lastScrollY;

    // Move the mission box up/down based on scroll direction
    const maxOffset = 30;
    const offset = Math.max(-maxOffset, Math.min(maxOffset, scrollDiff * 0.5));

    missionBox.style.transform = `translateY(${offset}px)`;

    lastScrollY = currentScrollY;

    // Smoothly return to original position when scrolling stops
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
        missionBox.style.transform = 'translateY(0px)';
    }, 150);
});