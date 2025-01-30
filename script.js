// navbar animation

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
let menuOpen = false;

// GSAP Timeline for the menu animation
const menuAnimation = gsap.timeline({ paused: true })
    .to(navbar, { display: 'flex', opacity: 1, duration: 0.3, ease: "power2.out" })
    .reverse(); // Start reversed for closed state

// GSAP Timeline for the SVG hamburger animation
const svgAnimation = gsap.timeline({ paused: true })
    .to(".top", { y: 84, rotate: 45, duration: 0.3, transformOrigin: "center", ease: "power2.inOut" })
    .to(".bottom", { y: -84, rotate: -45, duration: 0.3, transformOrigin: "center", ease: "power2.inOut" }, "<")
    .to(".middle", { opacity: 0, duration: 0.3, ease: "power2.inOut" }, "<");

// Event Listener
hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
        menuAnimation.play(); // Open menu
        svgAnimation.play();  // Animate to "X"
    } else {
        menuAnimation.reverse(); // Close menu
        svgAnimation.reverse();  // Animate back to hamburger
    }
});