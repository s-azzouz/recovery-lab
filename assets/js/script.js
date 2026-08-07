/* jshint esversion: 6 */
// RecoveryLab — main JavaScript file
// Interactivity (nav toggle, questionnaire logic, form validation) will be added here incrementally.
// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
// ===== Recovery Plan Form Validation =====
const consultationForm = document.querySelector('.consultation-form');

if (consultationForm) {
  const confirmationMessage = document.getElementById('form-confirmation');

  consultationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let isFormValid = true;

    const requiredFields = consultationForm.querySelectorAll('[required]');

    requiredFields.forEach((field) => {
      const formGroup = field.closest('.form-group');
      const errorSpan = document.getElementById(`${field.id}-error`);

      if (!field.value.trim()) {
        isFormValid = false;
        formGroup.classList.add('has-error');
        field.setAttribute('aria-invalid', 'true');
        errorSpan.textContent = 'This field is required.';
      } else if (field.type === 'email' && !field.checkValidity()) {
        isFormValid = false;
        formGroup.classList.add('has-error');
        field.setAttribute('aria-invalid', 'true');
        errorSpan.textContent = 'Please enter a valid email address.';
      } else {
        formGroup.classList.remove('has-error');
        field.removeAttribute('aria-invalid');
        errorSpan.textContent = '';
      }
    });

    if (isFormValid) {
      confirmationMessage.textContent = 'Thanks — your application has been received. We\'ll be in touch soon.';
      consultationForm.reset();
    } else {
      confirmationMessage.textContent = '';
    }
  });
}