# 🛠️ Wellness Cart – Backend

This is the backend service for **Wellness Cart**, a wellness-focused eCommerce platform. It is built using **Spring Boot** and exposes RESTful APIs for products, cart operations, and order management. The backend uses **MySQL** for data persistence and **Redis** for caching frequently accessed product/filter data. The system is modular, RESTful, and Docker-ready.

---

## 📌 Tech Stack

- **Java**
- **Spring Boot**
- **MySQL**
- **Redis**
- **Maven**

> 🐳 *Dockerized setup available – see [Docker README](../docker/README.md) for full containerized deployment.*

---

## 📂 Project Structure

```bash
src/main/java/com/wellnesscart/backend/

├── config          # Global configuration classes
├── controller      # REST controllers
├── entity          # JPA entities
├── exceptions      # Custom exception handling
├── mapper          # DTO to entity mappers
├── model           # Request/response models (DTOs)
├── repository      # Spring Data JPA repositories
├── security        # Security configs
└── service         # Business logic services
```
---

## 🚀 Key Features

- 🛍️ Product browsing with type & brand-based filtering
- 🛒 Cart management (add, update, view)
- ✅ Place orders (for a predefined user)
- ⚡ Redis Caching for fast product & filter response
- 🔗 Clean, modular, RESTful architecture

  ---

##🔧 Setup Instructions

📌 Prerequisites
- Java 17+
- Maven
- MySQL 8.0+
- Redis

  ---

## ⚙️ Steps to Run Locally

1. Clone the Repository
   
   ```bash
   git clone https://github.com/rangari-rani/wellness_cart.git
   cd wellness-cart/backend
   ```
3. Configure Database in application.yml
   
   ```bash
   spring:
     datasource:
    url: jdbc:mysql://localhost:3310/wellnesscart
    username: root
    password: your_password
     redis:
    host: localhost
    port: 6380

   ```
4. Build and Run the App
   
   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run

   ```
5. Access APIs via Postman or Browser
   
- GET /api/products – Product listing with optional filters
- GET /api/products/brands – Brand list
- GET /api/products/types – Product types
- POST /api/baskets – Add/update items in cart
- GET /api/baskets – View cart
- POST /api/orders – Place order
- POST /api/auth/login – Authenticate
  
  Base URL: http://localhost:8081/
  
---

### 💡 Redis Caching
- ✅ Product and filter data is cached in Redis for performance
- ♻️ Cache automatically refreshes with TTL (configurable)
- ⚙️ Configuration handled via application.yml

---

## 📬 Contact

This project is part of my developer portfolio.  
If you'd like to discuss it or have any feedback, feel free to connect!

Developed by **Rani Rangari**  
🔗 [LinkedIn](https://linkedin.com/in/your-profile) | ✉️ [Email](mailto:your.email@example.com)
