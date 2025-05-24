# 🛍️ Wellness Cart – An eCommerce Web App

Wellness Cart is a full-stack ecommerce platform dedicated to wellness products, featuring smooth user flows from browsing to checkout. Built with React, Spring Boot, and Docker, the app emphasizes responsive design, caching for performance, and containerized deployment.

---

## ⚙️ Tech Stack

- [**Java**](https://www.oracle.com/java/) – Programming language used for backend development.
- [**Spring Boot**](https://spring.io/projects/spring-boot) – Framework for building production-ready Java applications.
- [**Maven**](https://maven.apache.org) – Build automation tool for managing Java projects.
- [**React.js**](https://reactjs.org) – JavaScript library for building user interfaces.
- [**Vite**](https://vitejs.dev) – Fast frontend build tool and development server.
- [**Material-UI**](https://mui.com) – React UI framework for accessible and customizable components.
- [**MySQL**](https://www.mysql.com) – Relational database system for storing application data.
- [**Redis**](https://redis.io) – In-memory key-value store used for caching data.
- [**Docker**](https://www.docker.com) – Platform for containerizing applications.
- [**Docker Compose**](https://docs.docker.com/compose/) – Tool to define and run multi-container Docker applications.

---

## 🌟 Features

- 🏠 Home page with wellness journey content  
- 🛍️ Store with product listings, search, and filters (brand & type)  
- 🛒 Add to cart (login required)  
- 📍 Address form for delivery info  
- 💳 Payment form (simulated with debit card input)  
- ✅ Order confirmation page  
- 📦 Orders page to view order history  
- 🔐 Logout functionality  
- 📱 Fully responsive design for all devices

## 🔐 Authentication & Security

- Login is required to:
  - Add items to the cart
  - Complete purchases
- Ensures only authorized users can perform sensitive actions
  
---

## 🧠 State Management

- Frontend state is managed using:
  - React state
  - `localStorage`
- Benefits:
  - Cart contents are preserved across page reloads
  - Cart remains intact through login flow
  - Provides a seamless user experience

---

## 💡 User Experience Details

- **Responsive Design**
  - Optimized for both desktop and mobile devices

- **UI Library**
  - Built with Material-UI for:
    - Consistent styling
    - Accessibility
    - Mobile responsiveness

- **Checkout Flow**
  - Multi-step process:
    - Address → Payment → Review
  - Each step includes input validation
  - Enhances clarity and reliability

- **Access Control**
  - Login prompts are triggered for restricted actions
  - Prevents unauthorized cart modifications
  - Guides user through the intended flow

- **Pagination**
  - Implemented for:
    - Product listings
    - Order history
  - Improves load performance and navigation

---

## ⚙️ DevOps & Deployment

- **Containerization with Docker & Docker Compose**
  - Services containerized:
    - MySQL (with schema/data initialization)
    - Redis (for caching)
    - Spring Boot backend
  - Benefits:
    - Reproducible development environments
    - Simplified setup and deployment process

- **Redis Caching**
  - Caches:
    - Product listings
    - Filter metadata
  - Significantly reduces database load
  - Improves response times for API calls

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

## 🚀 Installation & Running the App

### Prerequisites
- Make sure you have [Docker](https://docs.docker.com/get-docker/) installed and running.
- Java 17+ and Node.js 16+ installed on your machine.
  
### 📁 Clone the Repository
```bash
git clone https://github.com/rangari-rani/wellness_cart.git
cd wellness-cart
```
### 🐳 Docker Setup
```bash
 cd docker
 docker-compose up -d
```
 Starts MySQL, Redis, and loads initial data.

### 🏗️ Backend Setup
```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```
 Test API endpoint: http://localhost:8081/api/products

### 🎨 Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 🌐 Open your browser at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8081

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
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, please consider giving it a star!
