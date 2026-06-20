document.addEventListener("DOMContentLoaded", () => {

    const USERNAME = "admin";
    const PASSWORD = "admin123";

    const form = document.getElementById("adminLoginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const loginError = document.getElementById("loginError");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        loginError.hidden = true;
        usernameError.textContent = "";
        passwordError.textContent = "";

        let valid = true;

        if (username.value.trim() === "") {
            usernameError.textContent = "Username is required";
            valid = false;
        }

        if (password.value.trim() === "") {
            passwordError.textContent = "Password is required";
            valid = false;
        }

        if (!valid) return;

        if (
            username.value.trim() === USERNAME &&
            password.value.trim() === PASSWORD
        ) {
            window.location.href = "admin-dashboard.html";
        } else {
            loginError.textContent = "Invalid username or password";
            loginError.hidden = false;
        }
    });

    username.addEventListener("input", () => {
        usernameError.textContent = "";
        loginError.hidden = true;
    });

    password.addEventListener("input", () => {
        passwordError.textContent = "";
        loginError.hidden = true;
    });

});
