document.addEventListener("DOMContentLoaded", () => {

    const registrations =
        JSON.parse(localStorage.getItem("eventRegistrations")) || [];

    const tableBody = document.getElementById("registrationsTableBody");
    const searchInput = document.getElementById("searchInput");
    const eventFilter = document.getElementById("eventFilter");

    document.getElementById("totalRegistrations").textContent =
        registrations.length;

    document.getElementById("totalEvents").textContent = 3;

    const today = new Date().toDateString();

    const todayCount = registrations.filter(reg =>
        reg.registeredAt &&
        new Date(reg.registeredAt).toDateString() === today
    ).length;

    document.getElementById("todayRegistrations").textContent =
        todayCount;

    function displayData(data) {

        if (data.length === 0) {
            tableBody.innerHTML =
                "<tr><td colspan='6'>No registrations found</td></tr>";
            return;
        }

        tableBody.innerHTML = "";

        data.forEach(reg => {
            tableBody.innerHTML += `
                <tr>
                    <td>${reg.fullName}</td>
                    <td>${reg.email}</td>
                    <td>${reg.phone}</td>
                    <td>${reg.college}</td>
                    <td>${reg.event}</td>
                    <td>${new Date(reg.registeredAt).toLocaleString()}</td>
                </tr>
            `;
        });
    }

    displayData(registrations);

    function filterData() {

        const search = searchInput.value.toLowerCase();
        const event = eventFilter.value;

        const filtered = registrations.filter(reg => {

            const matchSearch =
                reg.fullName.toLowerCase().includes(search) ||
                reg.email.toLowerCase().includes(search) ||
                reg.college.toLowerCase().includes(search);

            const matchEvent =
                event === "all" || reg.event === event;

            return matchSearch && matchEvent;
        });

        displayData(filtered);
    }

    searchInput.addEventListener("input", filterData);
    eventFilter.addEventListener("change", filterData);

    document.getElementById("logoutBtn")
        .addEventListener("click", () => {
            window.location.href = "admin-login.html";
        });

});
