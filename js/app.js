/* --- 1. NAVIGATIE HIGHLIGHT (Scrollspy) --- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

function highlightNavigation() {
  let scrollPosition = window.scrollY + 100;

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

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);


/* --- 2. TITEL WISSEL (Bij tabblad verlaten) --- */
const originalTitle = document.title;
const attentionMessages = [
  "Website nodig? 👀",
  "Unity App bouwen? 🎮",
  "Ik help je verder! 👋"
];
let titleInterval;

document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    let count = 0;
    // Wissel elke 2.5 seconden
    titleInterval = setInterval(function() {
      document.title = attentionMessages[count];
      count = (count + 1) % attentionMessages.length;
    }, 2500);
  } else {
    clearInterval(titleInterval);
    document.title = originalTitle;
  }
});
