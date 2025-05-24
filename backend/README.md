# Backend - Wellness Cart

## Overview

This folder contains the backend service for the Wellness Cart application. It is built using **Spring Boot** and connects to the MySQL database.

## Features

- REST APIs for product, order, brand, and type management
- MySQL database integration
- Handles business logic for wellness-cart operations

## Prerequisites

- Java JDK 17+ (or your required version)
- Maven or Gradle (depending on your build tool)
- MySQL server running (configured via Docker or locally)
- Docker (optional, if using Docker for database)

## Setup Instructions

1. **Configure database:**

   - Update `application.properties` (or `application.yml`) with your MySQL connection details:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3310/wellness_cart_db
     spring.datasource.username=root
     spring.datasource.password=root
     ```

2. **Build the backend:**

   ```bash
   ./mvnw clean install

   ```

3. **Run the backend:**
   ./mvnw spring-boot:run

4. **Test API:**
   Use Postman or any API client to test endpoints, e.g., http://localhost:8080/api/products

**Important Notes**

- The database schema and initial data are loaded via Docker volume mount or SQL scripts.

- Make sure the MySQL container or service is running before starting the backend.

**Useful Commands**

- Run tests: ./mvnw test

- Package jar: ./mvnw package
