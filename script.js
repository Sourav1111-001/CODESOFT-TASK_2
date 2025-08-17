// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('nav ul');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      menu.classList.remove('open'); // Close mobile nav after click
    }
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.feature-box');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
revealEls.forEach(el => observer.observe(el));

// Footer dynamic year
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
