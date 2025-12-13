// Highlight active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

function highlightNavigation() {
  let scrollPosition = window.scrollY + 100; // Offset for better triggering

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Run on scroll and on page load
window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);
document.addEventListener('DOMContentLoaded', () => {
  // Text rotation logic
  const textElement = document.getElementById('changing-text');
  const words = ["Website", "App", "VR ervaring", "Game"];
  let index = 0;

  if (textElement) {
    setInterval(() => {
      // Fade out the text
      textElement.classList.add('fade-out');

      // Wait for the fade-out transition to finish
      setTimeout(() => {
        // Change the word
        index = (index + 1) % words.length;
        textElement.textContent = words[index];

        // Fade the text back in
        textElement.classList.remove('fade-out');
      }, 300); // This duration must match the CSS transition time

    }, 2500); // Changes every 2.5 seconds
  }

  // Update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});