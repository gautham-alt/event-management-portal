'use strict';

/* ===================================================================
   Admin Login — admin-login.js
   NOTE: Credentials are hardcoded for demo purposes only.
   This is NOT secure for production use — real authentication
   must be handled by a server, never in client-side JavaScript.
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'admin123';
  const REDIRECT_URL = 'admin-dashboard.html';

  const form = document.getElementById('adminLoginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const loginError = document.getElementById('loginError');
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');

  /**
   * Displays the top-level login error banner.
   */
  const showLoginError = (message) => {
    loginError.textContent = message;
    loginError.hidden = false;
  };

  /**
   * Hides the top-level login error banner.
   */
  const hideLoginError = () => {
    loginError.textContent = '';
    loginError.hidden = true;
  };

  /**
   * Clears a single field's inline error message.
   */
  const clearFieldError = (errorEl) => {
    errorEl.textContent = '';
  };

  /**
   * Validates that both fields are filled in.
   * Returns true if valid, false otherwise.
   */
  const validateFields = (username, password) => {
    let isValid = true;

    clearFieldError(usernameError);
    clearFieldError(passwordError);

    if (!username) {
      usernameError.textContent = 'Username is required.';
      isValid = false;
    }

    if (!password) {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    }

    return isValid;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    hideLoginError();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateFields(username, password)) {
      return;
    }

    const credentialsMatch =
      username === ADMIN_USERNAME && password === ADMIN_PASSWORD;

    if (credentialsMatch) {
      window.location.href = REDIRECT_URL;
    } else {
      showLoginError('Invalid username or password. Please try again.');
      passwordInput.value = '';
      passwordInput.focus();
    }
  });

  // Hide error feedback as soon as the user starts correcting input.
  usernameInput.addEventListener('input', () => {
    clearFieldError(usernameError);
    hideLoginError();
  });

  passwordInput.addEventListener('input', () => {
    clearFieldError(passwordError);
    hideLoginError();
  });

});
