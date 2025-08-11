# 🐳 Docker Setup – Wellness Cart

This folder contains the Docker configuration to run the **Wellness Cart** full-stack application locally using Docker and Docker Compose. It includes containers for:

- **Backend API** (Spring Boot)
- **Frontend UI** (React with Vite)
- **MySQL** (Database)
- **Redis** (Caching)

---

## 📦 Services Overview

| Service   | Description                            | Port    |
|-----------|----------------------------------------|---------|
| Backend   | Java Spring Boot API                   | 8081    |
| Frontend  | React (Vite) Application               | 5173    |
| MySQL     | Database (with seeded data via `data.sql`) | 3310    |
| Redis     | In-memory cache                        | 6380   |

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Docker
- Docker Compose

### ▶️ Run the Project

```bash
docker-compose up --build
```
This will:

- Build and run the backend and frontend containers
- Initialize MySQL with data.sql
- Start Redis for caching

---

### 🗃️ Folder Contents

```bash
docker/
├── docker-compose.yml    # Multi-container setup
└── data.sql              # Preloaded seed data for MySQL

```

---

### 🌐 Access Points

| Component | URL                                                    |
| --------- | ------------------------------------------------------ |
| Frontend  | [http://localhost:5173](http://localhost:5173)         |
| Backend   | [http://localhost:8081/api](http://localhost:8081) |
| MySQL     | localhost:3310 (for tools)                             |
| Redis     | localhost:6380 (no GUI UI)                             |

---

### 📝 Notes

- No .env file is required. All configurations are in docker-compose.yml and source files.
- data.sql is automatically executed when the MySQL container is initialized.

---

## 📬 Contact
     
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)   
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  
