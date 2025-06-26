# 🛍️ Wellness Cart – An eCommerce Web App

Wellness Cart is a full-stack ecommerce platform dedicated to wellness products, featuring smooth user flows from browsing to checkout. Built with React, Spring Boot, and Docker, the app emphasizes responsive design, caching for performance, and containerized deployment.

---

🎥 **Video Demo Available:**  
👉 [Watch the demo on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7333097056221155328/) *(includes walkthrough with key features)*

---


## ⚙️ Tech Stack

- [**Java**](https://www.oracle.com/java/) – Programming language used for backend development.
- [**Spring Boot**](https://spring.io/projects/spring-boot) – Framework for building production-ready Java applications.
- [**Maven**](https://maven.apache.org) – Build automation tool for managing Java projects.
- [**React.js**](https://reactjs.org) – JavaScript library for building user interfaces.
- [**Vite**](https://vitejs.dev) – Fast frontend build tool and development server.
- [**Material-UI**](https://mui.com) – React UI framework for accessible and customizable components.
- [**TypeScript**](https://www.typescriptlang.org/) - A typed superset of JavaScript that adds static types to improve code quality.
- [**MySQL**](https://www.mysql.com) – Relational database system for storing application data.
- [**Redis**](https://redis.io) – In-memory key-value store used for caching data.
- [**Docker**](https://www.docker.com) – Platform for containerizing applications.
- [**Docker Compose**](https://docs.docker.com/compose/) – Tool to define and run multi-container Docker applications.
- [**Postman**](https://www.postman.com/) - Tool for testing, documenting, and sharing backend APIs.

---

## 🌟 Features

- 🏠 Home page with wellness journey content  
- 🛍️ Store with product listings, search, and filters (brand & type)  
- 🛒 Add to cart (login required predeined user)  
- 📍 Address form for delivery info  
- 💳 Payment form (simulated with debit card input)  
- ✅ Order confirmation page  
- 📦 Orders page to view order history  
- 🔐 Logout functionality  
- 📱 Fully responsive design for all devices

---

## 📸 Screenshots


### Desktop Views
![Product List Page](https://github.com/rangari-rani/wellness_cart/blob/c06e8de2a29827d2746596f839cc78aa5cd8d29f/screenshots/ProductList.png)  
_Product List Page_

![Product Page](https://github.com/rangari-rani/wellness_cart/blob/c06e8de2a29827d2746596f839cc78aa5cd8d29f/screenshots/ProductView.png)  
_Product Detail Page_

![Login Page](https://github.com/rangari-rani/wellness_cart/blob/c06e8de2a29827d2746596f839cc78aa5cd8d29f/screenshots/Login.png)  
_Login Page_

![Order Summary Page](https://github.com/rangari-rani/wellness_cart/blob/c06e8de2a29827d2746596f839cc78aa5cd8d29f/screenshots/OrderSummary.png)  
_Order Summary_

### Mobile Views
<p align="center">
  <img src="https://github.com/rangari-rani/wellness_cart/blob/c06e8de2a29827d2746596f839cc78aa5cd8d29f/screenshots/Mobile_ProductList.png" alt="Mobile Product List" width="22%">
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/wellness_cart/blob/c06e8de2a29827d2746596f839cc78aa5cd8d29f/screenshots/Mobile_ProductView.png" alt="Mobile Product View" width="22%">
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/wellness_cart/blob/c06e8de2a29827d2746596f839cc78aa5cd8d29f/screenshots/Mobile_Login.png" alt="Mobile Login" width="22%">
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/wellness_cart/blob/c06e8de2a29827d2746596f839cc78aa5cd8d29f/screenshots/Mobile_Checkout.png" alt="Mobile Checkout" width="22%">
</p>
_Mobile responsive design screenshots_

---

## 🚀 Getting Started

To get the full application up and running, please follow the step-by-step instructions in the relevant folders above. The typical workflow is:

1. Set up and run the database, Redis, and other services via Docker.  
2. Start the backend Spring Boot API server.  
3. Launch the frontend React app.

---

## 📁 Project Structure & Detailed Documentation

This repository is organized into multiple folders, each with its own README to help you get started quickly and understand that part of the project:

- [Backend (Spring Boot) README](backend/README.md)  
  Detailed instructions to build, run, and test the backend API.

- [Frontend (React + Vite) README](frontend/README.md)  
  Setup and run instructions for the frontend UI.

- [Docker Setup README](docker/README.md)  
  How to start and manage all services using Docker and Docker Compose.

---
## 🧩 Architecture & UX Summary
🔐 Authentication & Security
- Login required to add items to cart and place orders, ensuring only authorized access to sensitive actions.

🧠 State Management
- Uses React state and localStorage to preserve cart across reloads and through login for seamless experience.

💡 User Experience
- Responsive UI (MUI) with mobile-first design, multi-step checkout (Address → Payment → Review) with validation, login prompts for restricted actions, and pagination for products and orders.

⚙️ DevOps & Deployment
- Dockerized setup with MySQL, Redis, and Spring Boot ensures reproducibility and fast onboarding; Redis caching improves API speed and reduces DB load.
---

## 🧩 Challenges Faced

### 🧠 Frontend Logic & User Experience

#### 🛒 Cart + Login Flow  
Managing cart state when a user added products **before logging in** was tricky.  
I implemented a **login prompt** for cart actions and preserved cart data using **React state and `localStorage`**, ensuring a seamless post-login experience.

#### 🧾 Multi-Step Checkout  
The checkout flow involved three sequential forms: **Address → Payment → Review**.  
To handle transitions and validations cleanly:
- I **lifted state** up across components.
- Enforced **step-by-step validation**, improving UX and form reliability.

---

### ⚙️ Backend Optimization & DevOps

#### 🧠 Redis Caching  
Initial product and filter loading directly from MySQL caused latency.  
I introduced **Redis caching** to store frequently accessed data like product lists and filter metadata.  
This significantly reduced backend DB load and improved **response times**.

#### 🐳 Docker for Consistent Setup  
Manually managing MySQL, Redis, and Spring Boot services was error-prone across environments.  
I used **Docker and `docker-compose`** to containerize:
- MySQL with mounted SQL for initial schema and data.
- Redis for caching.
- Backend connectivity — ensuring **consistent and fast onboarding** for any environment.

---

## 💡 Future Improvements

- 💳 Integrate a real payment gateway (e.g., Stripe or PayPal)
- 🛠️ Add an admin dashboard for managing products and orders
- 🔍 Enhance search with fuzzy matching and advanced sorting
- 📬 Add email notifications for order confirmations
  
---


## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

- This project is part of my personal developer portfolio.  If you're hiring or open to referrals, I’d love to connect!
- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, consider giving it a star!

