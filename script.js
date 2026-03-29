/* ============================================================
   Mobile Navigation
   ============================================================ */
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================================
   Active Nav Link
   ============================================================ */
(function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const allLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  allLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   Nav scroll shadow
   ============================================================ */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 30
    ? '0 2px 24px rgba(0,0,0,0.06)'
    : 'none';
}, { passive: true });

/* ============================================================
   Scroll-reveal fade-in
   ============================================================ */
const revealEls = document.querySelectorAll('[data-reveal]');
if (revealEls.length && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
    revealObserver.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-reveal]').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('revealed');
    }
  });
});

/* ============================================================
   Revealed state
   ============================================================ */
const style = document.createElement('style');
style.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

/* ============================================================
   Contact Form
   ============================================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const msg = document.getElementById('formSuccess');
    const original = btn.textContent;

    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      if (msg) msg.classList.add('show');
      contactForm.reset();

      setTimeout(() => {
        if (msg) msg.classList.remove('show');
      }, 5000);
    }, 1200);
  });
}
