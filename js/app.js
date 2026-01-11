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


/* --- 3. TAAL WISSELAAR (Language Switcher) --- */
const translations = {
  nl: {
    "nav.services": "Diensten",
    "nav.process": "Werkwijze",
    "nav.portfolio": "Portfolio",
    "nav.unity": "Unity",
    "nav.contact": "Offerte aanvragen",
    "hero.title.websites": "Websites &",
    "hero.title.unity": "Unity Apps",
    "hero.title.create": "laten maken?",
    "hero.subtitle": "Ik ben jouw freelance partner voor maatwerk websites en interactieve 3D ervaringen. Moderne technologie zonder de bureau-prijzen.",
    "hero.cta.start": "Start je project",
    "hero.cta.work": "Bekijk mijn werk",
    "hero.list.1": "100% Responsive & SEO-geoptimaliseerd",
    "hero.list.2": "Expert in Webdesign én Game Development",
    "hero.list.3": "Direct contact met de ontwikkelaar",
    "hero.terminal.text": "Geen zwart gat waar je idee in verdwijnt. Transparante code, heldere logica en een resultaat dat werkt.",
    "services.title": "Waarmee kan ik je helpen?",
    "services.subtitle": "Digitale oplossingen die jouw bedrijf of idee laten groeien.",
    "services.card1.title": "Online Zichtbaarheid",
    "services.card1.text": "Wil je een product lanceren of leads verzamelen? Ik bouw snelle landingspagina's die bezoekers omzetten in klanten.",
    "services.card1.list1": "Hoge conversie focus",
    "services.card1.list2": "Google Analytics integratie",
    "services.card1.list3": "Razendsnelle laadtijden",
    "services.card2.title": "Web & E-commerce",
    "services.card2.text": "Van snelle landingspagina's tot complete webshops. Ik bouw nieuw of help je met bestaande systemen.",
    "services.card2.list1": "Maatwerk Websites",
    "services.card2.list2": "Shopify & WordPress setup",
    "services.card2.list3": "Reparatie van bestaande code",
    "services.card3.title": "Professionele Identiteit",
    "services.card3.text": "Een complete bedrijfswebsite die vertrouwen uitstraalt. Ideaal voor het MKB en freelancers die een stap verder willen.",
    "services.card3.list1": "Vindbaar in Google (SEO)",
    "services.card3.list2": "Makkelijk uitbreidbaar",
    "services.card3.list3": "Inclusief hosting advies",
    "services.card4.title": "Interactieve Ervaringen",
    "services.card4.text": "Wil je écht opvallen? Kies voor een interactief portfolio of een 3D-beleving op het web waar je concurrenten jaloers op zijn.",
    "services.card4.list1": "Unieke animaties",
    "services.card4.list2": "Portfolio gallerijen",
    "services.card4.list3": "Verhaalgerichte layouts",
    "process.title": "Zo werken we samen",
    "process.subtitle": "Transparant, persoonlijk en zonder technisch jargon.",
    "process.step1.title": "1. Het Gesprek",
    "process.step1.text": "Jij vertelt wat je nodig hebt. Ik luister, stel vragen en denk mee over de haalbaarheid en de beste technische aanpak.",
    "process.step2.title": "2. De Bouwfase",
    "process.step2.text": "Ik ga aan de slag met het ontwerp en de code. Je krijgt tussentijds updates zodat je precies ziet hoe je project tot leven komt.",
    "process.step3.title": "3. Oplevering & Support",
    "process.step3.text": "We zetten alles live. Ik leg je uit hoe alles werkt en blijf beschikbaar voor vragen of toekomstige uitbreidingen.",
    "work.title": "Kies je stijl",
    "work.subtitle": "Bekijk deze voorbeeldstructuren. Elk design wordt volledig aangepast aan jouw huisstijl.",
    "work.business.title": "De 'Corporate' Look",
    "work.business.text": "Betrouwbaar, strak en overzichtelijk. Perfect voor diensten.",
    "work.creative.title": "De 'Creative' Look",
    "work.creative.text": "Visueel ingesteld met veel ruimte voor afbeeldingen en werk.",
    "work.minimalist.title": "De 'Minimalist' Look",
    "work.minimalist.text": "Alles op één pagina. Modern, snel en to-the-point.",
    "unity.title": " Unity Development",
    "unity.subtitle": "Als ervaren Unity ontwikkelaar bouw ik meer dan alleen websites.",
    "unity.card1.title": "Serious Games & Apps",
    "unity.card1.text": "Educatieve applicaties of gamified marketing tools die werken op zowel mobiel (iOS/Android) als desktop.",
    "unity.card1.list1": "Cross-platform development",
    "unity.card1.list2": "Touch controls & UI",
    "unity.card1.list3": "App Store begeleiding",
    "unity.card2.title": "3D Visualisaties",
    "unity.card2.text": "Interactieve productdemo's of vastgoed walkthroughs. Laat klanten je product ervaren voordat ze kopen.",
    "unity.card2.list1": "High-end graphics",
    "unity.card2.list2": "Real-time rendering",
    "unity.card2.list3": "WebGL (draait in browser)",
    "unity.card3.title": "Virtual Reality (VR)",
    "unity.card3.text": "Dompel je gebruikers onder in een andere wereld. Ideaal voor veilige trainingen of indrukwekkende presentaties.",
    "unity.card3.list1": "Oculus / Meta Quest",
    "unity.card3.list2": "Trainingssimulaties",
    "unity.card3.list3": "360 graden video",
    "faq.title": "Veelgestelde Vragen",
    "faq.subtitle": "Duidelijkheid vooraf, zodat we allebei weten waar we aan toe zijn.",
    "faq.q1.title": "Maak je ook de 3D-modellen en graphics voor mijn game?",
    "faq.q1.text": "Mijn focus ligt op de <strong>technische ontwikkeling</strong> (de code en functionaliteit). Voor Unity-projecten verwacht ik dat jij de visuele assets (zoals 3D-modellen, sprites, UI en geluid) aanlevert. Heb je die niet? Dan kan ik je wel in contact brengen met getalenteerde designers.",
    "faq.q2.title": "Regel jij de hosting van de website?",
    "faq.q2.text": "Ik host zelf geen websites. Ik vind het belangrijk dat <strong>jij eigenaar blijft</strong> van je eigen data en domeinnaam. Ik adviseer je wel over de beste (en voordeligste) provider voor jouw project en ik regel de volledige technische installatie voor je.",
    "faq.q3.title": "Help je ook met Shopify, WordPress of bestaande code?",
    "faq.q3.text": "Zeker. Naast maatwerk kan ik je helpen met het professioneel opzetten van een <strong>Shopify</strong> winkel of <strong>WordPress</strong> site. Heb je al een project liggen waar fouten in zitten of dat updates nodig heeft? Ik duik graag in bestaande code om het weer werkend te krijgen.",
    "faq.q4.title": "Wat kost een project ongeveer?",
    "faq.q4.text": "Dat hangt af van de omvang. Een 'fix' aan een bestaande site of een simpele setup is voordeliger dan een complete Unity 3D-applicatie. Neem contact op voor een vrijblijvende prijsindicatie.",
    "contact.title": "Start jouw project",
    "contact.subtitle": "Klaar om je ideeën werkelijkheid te laten worden? Stuur me een berichtje.",
    "contact.note1": "Vrijblijvend advies",
    "contact.note2": "Direct antwoord van de ontwikkelaar",
    "contact.note3": "Geen technische kennis vereist",
    "contact.label.name": "Naam",
    "contact.placeholder.name": "Je naam",
    "contact.label.email": "E-mailadres",
    "contact.placeholder.email": "je@email.nl",
    "contact.label.interest": "Waar heb je interesse in?",
    "contact.option.landing": "Nieuwe Website",
    "contact.option.unity": "Unity App / Game",
    "contact.option.consulting": "Advies / Anders",
    "contact.label.message": "Bericht",
    "contact.placeholder.message": "Vertel kort over je idee...",
    "contact.button": "Verstuur bericht",
    "footer.text": "FK Innovations | Webdesign & App Development in Nederland."
  },
  en: {
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.portfolio": "Portfolio",
    "nav.unity": "Unity",
    "nav.contact": "Get a Quote",
    "hero.title.websites": "Websites &",
    "hero.title.unity": "Unity Apps",
    "hero.title.create": "Development",
    "hero.subtitle": "I am your freelance partner for custom websites and interactive 3D experiences. Modern technology without the agency prices.",
    "hero.cta.start": "Start project",
    "hero.cta.work": "View my work",
    "hero.list.1": "100% Responsive & SEO-optimized",
    "hero.list.2": "Expert in Web Design & Game Development",
    "hero.list.3": "Direct contact with the developer",
    "hero.terminal.text": "No black hole where your idea disappears. Transparent code, clear logic, and a result that works.",
    "services.title": "How can I help you?",
    "services.subtitle": "Digital solutions that help your business or idea grow.",
    "services.card1.title": "Online Visibility",
    "services.card1.text": "Want to launch a product or collect leads? I build fast landing pages that convert visitors into customers.",
    "services.card1.list1": "High conversion focus",
    "services.card1.list2": "Google Analytics integration",
    "services.card1.list3": "Blazing fast loading times",
    "services.card2.title": "Web & E-commerce",
    "services.card2.text": "From fast landing pages to complete webshops. I build new or help you with existing systems.",
    "services.card2.list1": "Custom Websites",
    "services.card2.list2": "Shopify & WordPress setup",
    "services.card2.list3": "Repair of existing code",
    "services.card3.title": "Professional Identity",
    "services.card3.text": "A complete business website that radiates trust. Ideal for SMEs and freelancers who want to go a step further.",
    "services.card3.list1": "Findable in Google (SEO)",
    "services.card3.list2": "Easily expandable",
    "services.card3.list3": "Including hosting advice",
    "services.card4.title": "Interactive Experiences",
    "services.card4.text": "Want to really stand out? Choose an interactive portfolio or a 3D experience on the web that your competitors will be jealous of.",
    "services.card4.list1": "Unique animations",
    "services.card4.list2": "Portfolio galleries",
    "services.card4.list3": "Story-driven layouts",
    "process.title": "How we work together",
    "process.subtitle": "Transparent, personal, and without technical jargon.",
    "process.step1.title": "1. The Conversation",
    "process.step1.text": "You tell me what you need. I listen, ask questions, and think along about feasibility and the best technical approach.",
    "process.step2.title": "2. The Build Phase",
    "process.step2.text": "I get to work on the design and code. You get interim updates so you see exactly how your project comes to life.",
    "process.step3.title": "3. Delivery & Support",
    "process.step3.text": "We launch everything. I explain how it works and remain available for questions or future expansions.",
    "work.title": "Choose your style",
    "work.subtitle": "Check out these example structures. Each design is fully adapted to your branding.",
    "work.business.title": "The 'Corporate' Look",
    "work.business.text": "Reliable, clean, and organized. Perfect for services.",
    "work.creative.title": "The 'Creative' Look",
    "work.creative.text": "Visually focused with plenty of room for images and work.",
    "work.minimalist.title": "The 'Minimalist' Look",
    "work.minimalist.text": "Everything on one page. Modern, fast, and to-the-point.",
    "unity.title": " Unity Development",
    "unity.subtitle": "As an experienced Unity developer, I build more than just websites.",
    "unity.card1.title": "Serious Games & Apps",
    "unity.card1.text": "Educational applications or gamified marketing tools that work on both mobile (iOS/Android) and desktop.",
    "unity.card1.list1": "Cross-platform development",
    "unity.card1.list2": "Touch controls & UI",
    "unity.card1.list3": "App Store guidance",
    "unity.card2.title": "3D Visualizations",
    "unity.card2.text": "Interactive product demos or real estate walkthroughs. Let customers experience your product before they buy.",
    "unity.card2.list1": "High-end graphics",
    "unity.card2.list2": "Real-time rendering",
    "unity.card2.list3": "WebGL (runs in browser)",
    "unity.card3.title": "Virtual Reality (VR)",
    "unity.card3.text": "Immerse your users in another world. Ideal for safe training or impressive presentations.",
    "unity.card3.list1": "Oculus / Meta Quest",
    "unity.card3.list2": "Training simulations",
    "unity.card3.list3": "360 degree video",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Clarity beforehand, so we both know where we stand.",
    "faq.q1.title": "Do you also create the 3D models and graphics for my game?",
    "faq.q1.text": "My focus is on the <strong>technical development</strong> (the code and functionality). For Unity projects, I expect you to provide the visual assets (such as 3D models, sprites, UI, and sound). Don't have those? Then I can put you in touch with talented designers.",
    "faq.q2.title": "Do you handle the hosting of the website?",
    "faq.q2.text": "I do not host websites myself. I believe it is important that <strong>you remain the owner</strong> of your own data and domain name. I will advise you on the best (and most affordable) provider for your project and I will handle the entire technical installation for you.",
    "faq.q3.title": "Do you also help with Shopify, WordPress, or existing code?",
    "faq.q3.text": "Certainly. In addition to custom work, I can help you professionally set up a <strong>Shopify</strong> store or <strong>WordPress</strong> site. Do you already have a project with errors or that needs updates? I love diving into existing code to get it working again.",
    "faq.q4.title": "What does a project cost approximately?",
    "faq.q4.text": "That depends on the scope. A 'fix' to an existing site or a simple setup is cheaper than a complete Unity 3D application. Contact me for a no-obligation price indication.",
    "contact.title": "Start your project",
    "contact.subtitle": "Ready to turn your ideas into reality? Send me a message.",
    "contact.note1": "No-obligation advice",
    "contact.note2": "Direct answer from the developer",
    "contact.note3": "No technical knowledge required",
    "contact.label.name": "Name",
    "contact.placeholder.name": "Your name",
    "contact.label.email": "Email address",
    "contact.placeholder.email": "you@email.com",
    "contact.label.interest": "What are you interested in?",
    "contact.option.landing": "New Website",
    "contact.option.unity": "Unity App / Game",
    "contact.option.consulting": "Consulting / Other",
    "contact.label.message": "Message",
    "contact.placeholder.message": "Tell me briefly about your idea...",
    "contact.button": "Send message",
    "footer.text": "FK Innovations | Webdesign & App Development in the Netherlands."
  }
};

const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = 'nl';

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Als het een input/textarea placeholder is
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        // Gebruik innerHTML zodat HTML-tags (zoals <strong>) werken
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Update knop tekst
  langToggleBtn.textContent = lang === 'nl' ? 'EN' : 'NL';
  currentLang = lang;
  document.documentElement.lang = lang;
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const newLang = currentLang === 'nl' ? 'en' : 'nl';
    updateLanguage(newLang);
  });
}
