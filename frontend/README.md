# 🎯 Wellness Cart – Frontend

This is the **frontend** of the Wellness Cart project – a wellness-focused eCommerce platform. Built with **React 19 + Vite**, it offers a fast, modern, and responsive user experience. It interacts with the backend via REST APIs to provide features like product browsing, cart management, order placement, and more.

---

## 📌 Tech Stack

- **React 19**
- **Vite**
- **Redux Toolkit**
- **Material UI (MUI)**
- **Axios**
- **React Hook Form + Yup**
- **FontAwesome**

---

## 📂 Folder Structure

```bash
src/
├── app/                 # Global app config
│   ├── api/             # Axios instances
│   ├── errors/          # Error handling components
│   ├── layout/          # Shared layout components (Navbar, Footer)
│   ├── models/          # TypeScript interfaces/types
│   ├── router/          # React Router setup
│   ├── store/           # Redux store config
│   └── util/            # Utilities and constants
├── features/            # Feature-based components
│   ├── account/         # Login functionality
│   ├── basket/          # Cart management
│   ├── catalog/         # Product listing & filtering
│   ├── checkout/        # Checkout and order placement
│   ├── contact/         # Contact form
│   ├── home/            # Landing page
│   └── orders/          # Order history
├── main.tsx             # Entry point
└── App.tsx              # App shell
```
🖼️ All images are stored in the public/ folder.

---

## 🚀 Features
- 🛍️ Browse wellness products by type and brand
- 🛒 Add/update items in the cart
- ✅ Place orders with predefined user
- 📦 View order history
- 📬 Contact form submission
- 💡 Form validation using React Hook Form + Yup
- 🌐 Fully responsive design for mobile, tablet, and desktop
- 🔄 Persistent state using Redux Toolkit
- 🚫 No .env file needed (all config is inline)

---

## 🔧 Setup Instructions
📌 Prerequisites
- Node.js (v18+ recommended)

---

## ⚙️ Steps to Run

1. Clone the Repository
   
   ```bash
   git clone https://github.com/rangari-rani/wellness-cart.git
   cd wellness-cart/frontend

   ```
2. Install Dependencies

   ```bash
   npm install
   ```

3. Run the App

   ```bash
   npm run dev
   ```

4. Visit in Browser
   - Navigate to http://localhost:5173

---

## 🔗 API Overview

 Frontend sends requests to backend running at http://localhost:8081.

 | Method | Endpoint               | Description                    |
| ------ | ---------------------- | ------------------------------ |
| `GET`  | `/api/products`        | List all products              |
| `GET`  | `/api/products/types`  | Get available product types    |
| `GET`  | `/api/products/brands` | Get available brands           |
| `POST` | `/api/baskets`         | Add/update items in the basket |
| `GET`  | `/api/baskets`         | Retrieve current cart          |
| `POST` | `/api/orders`          | Place an order                 |
| `GET`  | `/api/orders`          | View order history             |
| `POST` | `/api/auth/login`      | Authenticate predefined user   |

📍 Base URL for API: http://localhost:8081

---

## 📬 Contact

- This project is part of my personal developer portfolio. Feel free to connect or share feedback!
- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, consider giving it a star!
