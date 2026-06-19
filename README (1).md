# Event Management Portal

A modern, responsive web portal for discovering events, registering attendees, and managing registrations through an admin dashboard — built entirely with HTML5, CSS3, and vanilla JavaScript.

\---

## 📋 Project Overview

The **Event Management Portal** is a front-end web application designed to streamline how participants discover and register for events such as hackathons, tech talks, and coding challenges. It provides a public-facing homepage and registration flow, alongside a protected admin dashboard for managing and reviewing submitted registrations.

The project is built without any backend dependency for its current phase — all registration data is persisted in the browser using `localStorage`, making it lightweight, easy to deploy, and ideal as a foundation for future full-stack development.

\---

## ✨ Features

* Responsive, mobile-first homepage with a hero section and event showcase
* Three featured event cards (Hackathon 2026, Tech Talk, Coding Challenge) with hover animations
* Full event registration form with real-time client-side validation
* Email and phone number format validation
* Success and error feedback for all form interactions
* Registration data stored locally with auto-generated timestamps
* Secure-feeling admin login flow with credential validation
* Admin dashboard with:

  * Live statistics (Total Registrations, Total Events, Today's Registrations)
  * Searchable and filterable registrations table
  * Logout functionality
* Consistent blue-and-white professional theme across all pages
* Built using semantic HTML5 for accessibility and SEO
* Smooth transitions and micro-animations throughout the UI

\---

## 🛠️ Technology Stack

|Layer|Technology|
|-|-|
|Markup|HTML5 (Semantic Elements)|
|Styling|CSS3 (Flexbox, CSS Grid, Animations)|
|Scripting|Vanilla JavaScript (ES6+)|
|Data Persistence|Browser `localStorage`|
|Version Control|Git \& GitHub|

> No frameworks, build tools, or external dependencies are required to run this project.

\---

## 📁 Folder Structure

```
event-management-portal/
│
├── index.html              # Homepage with hero section and event cards
├── register.html           # Event registration page
├── admin-login.html        # Admin login page
├── admin-dashboard.html    # Admin dashboard with stats and registrations table
│
├── css/
│   └── style.css           # Global stylesheet for all pages
│
├── js/
│   ├── register.js         # Registration form validation and storage logic
│   ├── admin-login.js      # Admin authentication logic
│   └── dashboard.js        # Dashboard rendering, search, and filter logic
│
└── README.md                # Project documentation
```

\---

## ⚙️ Installation Steps

1. **Clone the repository**

```bash
   git clone https://github.com/<your-username>/event-management-portal.git
   ```

2. **Navigate into the project directory**

```bash
   cd event-management-portal
   ```

3. **Open the project**

   * Simply open `index.html` in your preferred web browser, **or**
   * Use a local development server (recommended) for the best experience:

```bash
     npx live-server
     ```

No additional installation, package manager, or build step is required since the project uses only HTML, CSS, and JavaScript.

\---

## 🚀 Usage Instructions

1. Open **`index.html`** to view the homepage and browse upcoming events.
2. Click **Register** on any event card (or the navigation bar) to open the registration form.
3. Fill in your details — Full Name, Email, Phone Number, College Name, and Event — and submit.
4. On successful submission, a confirmation message appears and your registration is saved locally.
5. To access the admin panel, click **Admin Login** and sign in with the configured admin credentials.
6. From the **Admin Dashboard**, view registration statistics, search and filter entries, and log out when finished.

\---

## 🔮 Future Enhancements

* Integrate a backend (Node.js/Express or similar) with a real database (MongoDB/MySQL)
* Replace `localStorage` with secure server-side data storage and APIs
* Implement proper authentication with hashed passwords and session/token management
* Add email confirmation and notification system for registrants
* Enable event creation, editing, and deletion from the admin dashboard
* Add pagination and export-to-CSV/Excel for the registrations table
* Implement role-based access control for multiple admin levels
* Add dark mode and accessibility (WCAG) improvements
* Deploy with CI/CD pipeline to a cloud platform (Vercel, Netlify, or AWS)
* Add automated testing (unit and end-to-end)

\---

## 🔄 Agile Development Process

This project was developed using an **Agile, sprint-based workflow**, with each sprint delivering a complete, testable increment of functionality:

|Sprint|Focus Area|
|-|-|
|Sprint 1|Requirement gathering, wireframing, and homepage structure|
|Sprint 2|Global stylesheet, responsive layout, and design system|
|Sprint 3|Event registration page and form validation logic|
|Sprint 4|Admin login page and authentication logic|
|Sprint 5|Admin dashboard, statistics, search, and filtering|
|Sprint 6|Testing, bug fixes, documentation, and final review|

Each sprint followed the standard Agile cycle: **Plan → Design → Build → Review → Refine**, with continuous feedback incorporated before moving to the next increment.

\---

## 🌳 Git Branching Strategy

This project follows a simplified **Git Flow** branching model to keep development organized and production-ready code stable:

* **`main`** — Always reflects the stable, production-ready version of the project.
* **`develop`** — Integration branch where completed features are merged before release.
* **`feature/\*`** — Individual feature branches (e.g. `feature/registration-form`, `feature/admin-dashboard`) created from `develop`.
* **`bugfix/\*`** — Branches for fixing issues found during development or testing.
* **`release/\*`** — Used to prepare a new production release before merging into `main`.
* **`hotfix/\*`** — Used for urgent fixes directly on `main` in case of critical production issues.

**Workflow:**

```
feature/\* → develop → release/\* → main
                ↑
            bugfix/\*
```

Pull requests are used for all merges into `develop` and `main` to enable code review before integration.

\---

## 👤 Author Information

**Author:** Gautham P Sajith
**Role:** DevOps Developer 
**Email:** gauthampsajith@example.com
**GitHub:** [github.com/](https://github.com/your-username)gautham-alt
**LinkedIn:** [linkedin.com/in/](https://linkedin.com/in/your-profile)gauthampsajith

\---

## 📄 License

This project is open-source and available for educational and personal use. Feel free to fork and build upon it.

