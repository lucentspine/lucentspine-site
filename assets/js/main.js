// ==========================================
// Dr. Stanley S. Lee - Expert Witness Website
// Main JavaScript
// ==========================================

// Sticky header on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    primaryNav.classList.toggle('active');
    this.classList.toggle('active');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = primaryNav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && primaryNav.classList.contains('active')) {
      primaryNav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      primaryNav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Set active navigation based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
