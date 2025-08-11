# 🛍️ Wellness Cart – User-Focused Wellness eCommerce (CRUD App)

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)

A full-stack web application for seamless wellness product shopping, featuring user login, product browsing, cart management, and a smooth multi-step checkout experience.

---

🎥 **Video Demo Available:**   [Watch the demo on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7333097056221155328/) *(includes walkthrough with key features)*

---

## 📚 About This Project  

**Wellness Cart** is a full-stack eCommerce web application built with **React** and **Spring Boot**, developed independently as a hands-on full-stack project.  

- All product data and images are predefined for demo purposes.  
- User credentials (username and password) are preset to simplify access.  
> 🕒 *This CRUD app serves as a foundational project focusing on core user functionality.*  

---

## ⚙️ Tech Stack

- [**React.js**](https://reactjs.org) – JavaScript library for building user interfaces.
- [**Spring Boot**](https://spring.io/projects/spring-boot) – Framework for building production-ready Java applications.
- [**MySQL**](https://www.mysql.com) – Relational database system for storing application data.
- [**Redis**](https://redis.io) – In-memory key-value store used for caching data.
- [**Docker**](https://www.docker.com) – Platform for containerizing applications.

---

## 🌟 Features

- 🛍️ User-friendly product browsing with search and filter options  
- 🔐 Secure login and cart management for seamless shopping  
- 🛒 Multi-step checkout: address input, simulated payment, and order confirmation  
- 📦 Order history with detailed summaries  
- 📱 Responsive design optimized for desktop and mobile  

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

1. Start database, Redis, and backend services using Docker Compose:

```bash
docker-compose up -d
```
2. Run backend API (Spring Boot):

```bash
./mvnw spring-boot:run
```

3. Launch frontend React app:

```bash
npm install
npm run dev
```

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

## 🧩 Architecture & Key Highlights

- **Secure authentication** requiring login to add to cart and place orders.  
- **State management** using React state and `localStorage` to persist cart data seamlessly across sessions.  
- **Responsive, user-friendly UI** with multi-step checkout and validation.  
- **Backend optimizations** including Redis caching to speed up data retrieval and reduce database load.  
- **Dockerized environment** for consistent and easy deployment of backend, database, and cache services.  

---

## ⚙️ Challenges & Learnings

- Handling cart state before and after login for smooth user experience.  
- Designing a multi-step checkout with clear validation at each step.  
- Implementing Redis caching to improve backend performance.  
- Containerizing all services using Docker for reproducible setups.  
  
---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!
