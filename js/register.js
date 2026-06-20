document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");
    const successMessage = document.getElementById("successMessage");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const college = document.getElementById("college");
    const eventSelect = document.getElementById("eventSelect");

    const feeInput = document.getElementById("eventFee");
    const paymentStatus = document.getElementById("paymentStatus");

    const eventFees = {
        "hackathon-2026": 200,
        "tech-talk": 100,
        "coding-challenge": 150
    };

    eventSelect.addEventListener("change", () => {
        feeInput.value = eventFees[eventSelect.value]
            ? "₹" + eventFees[eventSelect.value]
            : "";
    });

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        if (
            fullName.value.trim() === "" ||
            email.value.trim() === "" ||
            phone.value.trim() === "" ||
            college.value.trim() === "" ||
            eventSelect.value === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        const registration = {
            fullName: fullName.value,
            email: email.value,
            phone: phone.value,
            college: college.value,
            event: eventSelect.value,
            fee: feeInput.value,
            paymentStatus: paymentStatus.value,
            registeredAt: new Date().toISOString()
        };

        const registrations =
            JSON.parse(localStorage.getItem("eventRegistrations")) || [];

        registrations.push(registration);

        localStorage.setItem(
            "eventRegistrations",
            JSON.stringify(registrations)
        );

        successMessage.hidden = false;
        successMessage.textContent =
            "Registration Successful! Redirecting...";

        form.reset();
        feeInput.value = "";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    });

});
