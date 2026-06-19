'use strict';

/* ===================================================================
   Admin Dashboard — dashboard.js
   Handles loading data from localStorage, filtering, stats, and UI.
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY = 'eventRegistrations';

  // DOM Elements
  const tableBody = document.getElementById('registrationsTableBody');
  const searchInput = document.getElementById('searchInput');
  const eventFilter = document.getElementById('eventFilter');
  const logoutBtn = document.getElementById('logoutBtn');

  // Stat Elements
  const statTotalReg = document.getElementById('totalRegistrations');
  const statTotalEvents = document.getElementById('totalEvents');
  const statTodayReg = document.getElementById('todayRegistrations');

  /**
   * Retrieves registrations from localStorage.
   */
  const getRegistrations = () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to load registrations:', error);
      return [];
    }
  };

  let registrations = getRegistrations();

  /**
   * Utility to safely escape HTML to prevent XSS.
   */
  const escapeHTML = (str) => {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  /**
   * Formats the event value into a readable string 
   * e.g., "hackathon-2026" -> "Hackathon 2026"
   */
  const formatEventName = (eventName) => {
    if (!eventName) return 'Unknown';
    return eventName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  /**
   * Updates the top statistics cards.
   */
  const updateStats = () => {

  // Reload latest data every time
  registrations = getRegistrations();

  // Total registrations
  statTotalReg.textContent = registrations.length;

  // Total events
  statTotalEvents.textContent = 3;

  // Today's registrations
  const today = new Date().toDateString();

  const todayCount = registrations.filter(reg => {
    return reg.registeredAt &&
      new Date(reg.registeredAt).toDateString() === today;
  }).length;

  statTodayReg.textContent = todayCount;
};

  /**
   * Renders the data into the HTML table.
   */
  const renderTable = (data) => {
    tableBody.innerHTML = '';

    if (data.length === 0) {
      tableBody.innerHTML = `
        <tr>
            <td colspan="6" style="text-align: center; color: var(--color-text-light);">
                No registrations found.
            </td>
        </tr>
      `;
      return;
    }

    data.forEach(reg => {
      const row = document.createElement('tr');
      
      const dateStr = reg.registeredAt 
        ? new Date(reg.registeredAt).toLocaleString() 
        : 'N/A';
        
      row.innerHTML = `
        <td>${escapeHTML(reg.fullName)}</td>
        <td>${escapeHTML(reg.email)}</td>
        <td>${escapeHTML(reg.phone)}</td>
        <td>${escapeHTML(reg.college)}</td>
        <td><span class="status-badge confirmed">${escapeHTML(formatEventName(reg.event))}</span></td>
        <td>${escapeHTML(dateStr)}</td>
      `;
      
      tableBody.appendChild(row);
    });
  };

  /**
   * Handles filtering the registrations array based on search and event select.
   */
  const handleFilters = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filterValue = eventFilter.value;

    const filteredData = registrations.filter(reg => {
      // Check search match (Name, Email, or College)
      const matchesSearch = 
        (reg.fullName || '').toLowerCase().includes(searchTerm) ||
        (reg.email || '').toLowerCase().includes(searchTerm) ||
        (reg.college || '').toLowerCase().includes(searchTerm);

      // Check event filter match
      const matchesEvent = filterValue === 'all' || reg.event === filterValue;

      return matchesSearch && matchesEvent;
    });

    renderTable(filteredData);
  };

  // --- Event Listeners ---

  searchInput.addEventListener('input', handleFilters);
  eventFilter.addEventListener('change', handleFilters);

  logoutBtn.addEventListener('click', () => {
    // Redirect to login page on logout
    window.location.href = 'admin-login.html';
  });

  // --- Initialization ---

registrations = getRegistrations();

updateStats();
renderTable(registrations);

console.log("Loaded registrations:", registrations);
});
