# 🛠️ Wellness Cart – Backend

This is the backend service for **Wellness Cart**, a wellness-focused eCommerce platform. Built using **Spring Boot**, it exposes RESTful APIs for product listing, cart operations, and order placement. The backend uses **MySQL** for persistence and **Redis** to cache frequently accessed product and filter data. The system is modular, RESTful, and Docker-ready.

---

## 📌 Tech Stack

- **Java 17**
- **Spring Boot**
- **MySQL**
- **Redis**
- **Maven**

> 🐳 *Dockerized setup available – see [Docker README](../docker/README.md) for containerized deployment.*

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
├── security        # Security configurations
└── service         # Business logic services
```
---

## 🚀 Key Features

- 🛍️ Browse products with filtering (by type & brand)
- 🛒 Add to cart, update quantity, view cart
- ✅ Place orders 
- ⚡ Redis caching to improve product/filter API response time
- 🔗 Modular and clean RESTful API design

  ---

##🔧 Setup Instructions

📌 Prerequisites
- Java 17+
- Maven
- MySQL 8.0+
- Redis (locally installed or Docker-based)

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
   
  Base URL: http://localhost:8081/
  
| Method | Endpoint               | Description                      |
| ------ | ---------------------- | -------------------------------- |
| GET    | `/api/products`        | List all products                |
| GET    | `/api/products/brands` | Get available brands             |
| GET    | `/api/products/types`  | Get available product types      |
| POST   | `/api/baskets`         | Add/update items in cart         |
| GET    | `/api/baskets`         | View cart items                  |
| POST   | `/api/orders`          | Place an order (predefined user) |
| POST   | `/api/auth/login`      | User authentication              |

   
---

### 💡 Redis Caching
- ✅ Product and filter data is cached in Redis for performance
- 🔄 TTL and refresh policy configured in application.yml
- ⚡ Improves response time and reduces database load

---

📬 Contact
- This project is part of my personal developer portfolio. Feel free to connect or share feedback!
- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, consider giving it a star!
