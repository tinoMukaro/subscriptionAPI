# 📦 Subscription Management System API

## 🧠 Introduction
A production-ready **Subscription Management System API** built with Node.js, Express, and MongoDB.  
It authenticates users with JWT, manages subscriptions, and integrates with Arcjet for security.

---

## ⚙️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- Arcjet (Rate limiting & bot protection)
- Upstash (Email workflows)
- Nodemailer

---

## 🚀 Features
- **Advanced Rate Limiting & Bot Protection:** via Arcjet.
- **Database Modeling:** using Mongoose schemas.
- **JWT Authentication:** for user and subscription CRUD.
- **Global Error Handling:** with custom middleware and input validation.
- **Logging & Monitoring:** enhanced debugging support.
- **Automated Email Reminders:** smart workflows with Upstash.

---

## 🧩 Quick Start

### Prerequisites
Ensure you have the following installed:
- Git
- Node.js
- npm

### Clone the Repository

git clone https://github.com/tinoMukaro/subscriptionAPI.git
cd subscriptionAPI

### Instalation
npm install

PORT=5000
SERVER_URL="http://localhost:5000"
NODE_ENV=development

DB_URI=
JWT_SECRET=
JWT_EXPIRES_IN="1d"

ARCJET_KEY=
ARCJET_ENV="development"

QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

EMAIL_PASSWORD=

npm run dev
http://localhost:5000/
