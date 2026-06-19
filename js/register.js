'use strict';

/* ===================================================================
   Event Registration Form — register.js
   Handles validation, localStorage persistence, and UI feedback.
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('registerForm');
  const successMessage = document.getElementById('successMessage');

  const fields = {
    fullName: {
      input: document.getElementById('fullName'),
      error: document.getElementById('fullNameError'),
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('emailError'),
    },
    phone: {
      input: document.getElementById('phone'),
      error: document.getElementById('phoneError'),
    },
    college: {
      input: document.getElementById('college'),
      error: document.getElementById('collegeError'),
    },
    eventSelect: {
      input: document.getElementById('eventSelect'),
      error: document.getElementById('eventSelectError'),
    },
  };

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_REGEX = /^[0-9+\-\s]{7,15}$/;
  const STORAGE_KEY = 'eventRegistrations';

  /**
   * Displays an inline error message for a field and marks it invalid.
   */
  const setError = (fieldKey, message) => {
    const { input, error } = fields[fieldKey];
    error.textContent = message;
    input.setAttribute('aria-invalid', 'true');
    input.classList.add('input-invalid');
  };

  /**
   * Clears any inline error message for a field.
   */
  const clearError = (fieldKey) => {
    const { input, error } = fields[fieldKey];
    error.textContent = '';
    input.removeAttribute('aria-invalid');
    input.classList.remove('input-invalid');
  };

  const clearAllErrors = () => {
    Object.keys(fields).forEach(clearError);
  };

  /**
   * Runs all field validations.
   * Returns true if the form is valid, false otherwise.
   */
  const validateForm = () => {
    let isValid = true;

    const fullName = fields.fullName.input.value.trim();
    const email = fields.email.input.value.trim();
    const phone = fields.phone.input.value.trim();
    const college = fields.college.input.value.trim();
    const eventSelect = fields.eventSelect.input.value.trim();

    if (!fullName) {
      setError('fullName', 'Full name is required.');
      isValid = false;
    } else if (fullName.length < 3) {
      setError('fullName', 'Full name must be at least 3 characters.');
      isValid = false;
    }

    if (!email) {
      setError('email', 'Email address is required.');
      isValid = false;
    } else if (!EMAIL_REGEX.test(email)) {
      setError('email', 'Please enter a valid email address.');
      isValid = false;
    }

    if (!phone) {
      setError('phone', 'Phone number is required.');
      isValid = false;
    } else if (!PHONE_REGEX.test(phone)) {
      setError('phone', 'Please enter a valid phone number (7-15 digits).');
      isValid = false;
    }

    if (!college) {
      setError('college', 'College name is required.');
      isValid = false;
    }

    if (!eventSelect) {
      setError('eventSelect', 'Please select an event.');
      isValid = false;
    }

    return isValid;
  };

  /**
   * Reads existing registrations from localStorage.
   */
  const getStoredRegistrations = () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.error('Failed to read registrations from localStorage:', err);
      return [];
    }
  };

  /**
   * Saves a new registration record to localStorage.
   */
  const saveRegistration = (registration) => {
    try {
      const registrations = getStoredRegistrations();
      registrations.push(registration);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
      return true;
    } catch (err) {
      console.error('Failed to save registration to localStorage:', err);
      return false;
    }
  };

  /**
   * Builds a registration object from current form values.
   */
  const buildRegistration = () => ({
    fullName: fields.fullName.input.value.trim(),
    email: fields.email.input.value.trim(),
    phone: fields.phone.input.value.trim(),
    college: fields.college.input.value.trim(),
    event: fields.eventSelect.input.value,
    registeredAt: new Date().toISOString(),
  });

  /**
   * Shows the success message area and hides it again after a delay.
   */
  const showSuccessMessage = () => {

    successMessage.hidden = false;

    successMessage.innerHTML =
      "✅ Registration Successful!";

    successMessage.style.display = "block";
    successMessage.style.background = "#d4edda";
    successMessage.style.color = "#155724";
    successMessage.style.padding = "15px";
    successMessage.style.borderRadius = "8px";
    successMessage.style.marginBottom = "15px";

    successMessage.scrollIntoView({
        behavior: "smooth"
    });
};

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearAllErrors();

    if (!validateForm()) {
        return;
    }

    const registration = buildRegistration();
    const saved = saveRegistration(registration);

    if (!saved) {
        alert('Something went wrong while saving your registration. Please try again.');
        return;
    }

    alert("Registration Successful!");

    showSuccessMessage();

    setTimeout(() => {
        window.location.href = "admin-login.html";
    }, 2000);


showSuccessMessage();

setTimeout(() => {
    window.location.href = "admin-login.html";
}, 2000);
});
  // Clear individual field errors as the user corrects them.
  Object.keys(fields).forEach((key) => {
    fields[key].input.addEventListener('input', () => clearError(key));
  });

});
