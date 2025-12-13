'use strict';

function setupNavToggle() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.tagName === 'A') {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupSmoothScroll() {
  const header = document.querySelector('.site-header');
  const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches('a[href^="#"]')) {
      const href = target.getAttribute('href');
      if (!href || href === '#') return;

      const section = document.querySelector(href);
      if (!section) return;

      event.preventDefault();
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - headerHeight - 12;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  });
}

function setupScrollReveal() {
  const sections = document.querySelectorAll('.section-inner, .hero-content, .card');
  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  sections.forEach((el) => el.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  sections.forEach((el) => observer.observe(el));
}

function setYear() {
  const yearSpan = document.getElementById('year');
  if (!yearSpan) return;
  yearSpan.textContent = String(new Date().getFullYear());
}

window.addEventListener('DOMContentLoaded', () => {
  setupNavToggle();
  setupSmoothScroll();
  setupScrollReveal();
  setYear();
});
