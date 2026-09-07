// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Fermer le menu au clic sur un lien
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animation au scroll avec GSAP
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Hero animations
  gsap.from('.hero-badge', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2
  });

  gsap.from('.hero-title', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4
  });

  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.6
  });

  gsap.from('.hero-buttons', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.8
  });

  gsap.from('.hero-stats', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1
  });

  // Services cards
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: i * 0.1
    });
  });

  // Projects cards
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: i * 0.1
    });
  });

  // Feature boxes
  gsap.utils.toArray('.feature-box').forEach((box, i) => {
    gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: i * 0.1
    });
  });
}

// Lenis Smooth Scroll
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    navbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});