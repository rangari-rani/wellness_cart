# 🛍️ Wellness Cart – Backend (Spring Boot)  

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

This is the backend application of Wellness Cart, built with Java, Spring Boot, and MySQL.  
It handles RESTful APIs for product listing, cart operations, and order.

---

## ⚙️ Tech Stack

- **[Java](https://www.oracle.com/java/)** – Core backend language for building scalable APIs  
- **[Spring Boot](https://spring.io/projects/spring-boot)** – Framework for creating RESTful backend services  
- **[MySQL](https://www.mysql.com/)** – Relational database for storing users, projects, and tasks  

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

## 🚀 Key Features

- 🛍️ Browse products with filtering (by type & brand)  
- 🛒 Add to cart, update quantity, view cart  
- ✅ Place orders  
- ⚡ Redis caching to improve product/filter API response time  
- 🔗 Modular and clean RESTful API design  

---

## 🔧 Setup Instructions

### 📌 Prerequisites

- Java 17+  
- Maven  
- MySQL 8.0+  
- Redis (locally installed or Docker-based)  

### ⚙️ Steps to Run Locally  

1. Clone the Repository  
```bash
git clone https://github.com/rangari-rani/wellness_cart.git
cd wellness_cart/backend
```

2. Configure Database and Redis in `application.yml`
```bash
spring:
  datasource:
    url: jdbc:mysql://localhost:3310/your_database_name
    username: your_username
    password: your_password
  redis:
    host: localhost
    port: 6380
```

3. Build and Run the App  
```bash
./mvnw clean install
./mvnw spring-boot:run
```

# 4. Access APIs via Postman or Browser  

Base URL: http://localhost:8081/  

| Method | Endpoint               | Description                       |
| ------ | ---------------------- | -------------------------------- |
| GET    | `/api/products`        | List all products                 |
| GET    | `/api/products/brands` | Get available brands              |
| GET    | `/api/products/types`  | Get available product types       |
| POST   | `/api/baskets`         | Add/update items in cart          |
| GET    | `/api/baskets`         | View cart items                   |
| POST   | `/api/orders`          | Place an order (predefined user) |
| POST   | `/api/auth/login`      | User authentication               |

---

## 💡 Redis Caching

- ✅ Product and filter data is cached in Redis for performance  
- 🔄 TTL and refresh policy configured in `application.yml`  
- ⚡ Improves response time and reduces database load  

---

## 📬 Contact

- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
- ⭐ If you found this project helpful or insightful, feel free to leave a ⭐!
