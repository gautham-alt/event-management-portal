# Event Management Portal

A responsive web application for event registration built with HTML, CSS, and JavaScript. The project demonstrates a complete DevOps workflow by automating build and deployment using Jenkins, Docker, GitHub Webhooks, AWS EC2, and Nginx.

---

## Features

### User Features

- Browse available events
- Register through an interactive form
- Client-side form validation
- Responsive design for desktop and mobile devices
- Registration data stored using Local Storage

### Administrator Features

- Secure admin login
- View all registrations
- Monitor registration details through an admin dashboard

### DevOps Features

- Dockerized application
- Automated CI/CD pipeline using Jenkins
- GitHub Webhook integration
- Automated deployment to AWS EC2
- Nginx as the web server
- Version controlled with Git and GitHub

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | HTML5, CSS3, JavaScript |
| Storage | Browser Local Storage |
| Version Control | Git, GitHub |
| CI/CD | Jenkins, GitHub Webhooks |
| Containerization | Docker |
| Deployment | AWS EC2 |
| Web Server | Nginx |

---

## Project Structure

```text
Event-Management-Portal/
│
├── css/
│   └── style.css
│
├── js/
│   ├── admin-login.js
│   ├── dashboard.js
│   └── register.js
│
├── admin-dashboard.html
├── admin-login.html
├── index.html
├── register.html
├── Jenkinsfile
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/iam-Gautham/Event-Management-Portal.git
cd Event-Management-Portal
```

### Run Locally

Simply open `index.html` in your browser, or use a local development server such as VS Code Live Server.

---

## CI/CD Workflow

The deployment process is fully automated.

```
Developer
     │
     ▼
 GitHub Repository
     │
     ▼
 GitHub Webhook
     │
     ▼
 Jenkins Pipeline
     │
     ├── Source Checkout
     ├── Build
     ├── Docker Image
     ├── Deployment
     └── Verification
     │
     ▼
 AWS EC2
     │
     ▼
 Docker Container
     │
     ▼
 Nginx
     │
     ▼
 Live Application
```

Every push to the configured branch automatically triggers the Jenkins pipeline and deploys the latest version to the AWS EC2 instance.

---

## Data Storage

The application uses the browser's Local Storage to store registration details, including:

- Participant Name
- Email Address
- Phone Number
- Selected Event

---

## Future Improvements

- Database integration
- User authentication
- Online payment gateway
- Email notifications
- QR code-based event check-in
- Event analytics dashboard
- Search and filtering
- Multi-admin support

---

## Author

**Gautham P Sajith**

GitHub: https://github.com/iam-Gautham

LinkedIn: https://www.linkedin.com/in/gauthampsajith

---

## License

This project is licensed under the MIT License.
