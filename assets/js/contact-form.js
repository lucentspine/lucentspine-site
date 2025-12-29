// ==========================================
// Contact Form Validation & Handling
// ==========================================

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Basic client-side validation is handled by HTML5 required attributes
    // Additional custom validation can be added here if needed

    // Form will submit to Formspree
    // After successful submission, Formspree will handle the redirect
    // You can customize the action URL in contact.html with your Formspree form ID
  });

  // Real-time validation feedback
  const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');

  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (!this.validity.valid) {
        this.style.borderColor = 'var(--color-gold-accent)';
      } else {
        this.style.borderColor = 'var(--color-gray-medium)';
      }
    });

    input.addEventListener('input', function() {
      if (this.validity.valid) {
        this.style.borderColor = 'var(--color-gray-medium)';
      }
    });
  });
}
