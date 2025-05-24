# 🛍️ Wellness Cart – An eCommerce Web App

A full-stack wellness ecommerce platform with a complete user flow from product browsing to checkout and order history.

---

## ⚙️ Tech Stack

- **Frontend:** React.js, React Hooks, Tailwind CSS  
- **Backend:** Spring Boot (Java)  
- **Database:** MySQL  
- **Caching:** Redis (for product/filter caching)  
- **DevOps:** Docker, Docker Compose  

---

## 🌟 Features

- 🏠 Home page with wellness journey content  
- 🛍️ Store with product listings, search, and filters (brand & type)  
- 🛒 Add to cart (login required)  
- 📍 Address form for delivery info  
- 💳 Payment form (simulated with debit card input)  
- 📝 Review form post-purchase  
- ✅ Order confirmation page  
- 📦 Orders page to view order history  
- 🔐 Logout functionality  
- 📱 Responsive design 

---

## 📸 Screenshots

*(Add your screenshots inside the `/screenshots` folder and link them like this:)*

![Store Page](screenshots/store.png)  
![Login Form](screenshots/login.png)  
![Cart](screenshots/cart.png)  
![Address Form](screenshots/address.png)  
![Payment Form](screenshots/payment.png)  
![Order History](screenshots/orders.png)  

---

## 🚀 Installation & Running the App

```bash
# Clone the repository
git clone https://github.com/yourusername/wellness-ecommerce.git
cd wellness-ecommerce

# Backend (Spring Boot)
cd backend
./mvnw spring-boot:run

# Frontend (React)
cd ../frontend
npm install
npm run dev

🔗 Open your browser and visit: http://localhost:5173

## 🧩 Challenges Faced

### 🧠 Frontend Logic & User Experience

#### 🛒 Cart + Login Flow  
Managing cart state when a user added products before logging in was tricky. I implemented a login prompt on cart actions and preserved cart data using React state and `localStorage` to ensure a smooth experience.

#### 🧾 Multi-Step Checkout  
The checkout involved three sequential forms (Address → Payment → Review). To manage transitions and validations cleanly, I lifted state up across components and enforced step-wise validation.

#### 🔍 Real-Time Search & Filters  
Users can filter by brand/type and search in real time. This required efficient React state updates, event handlers, and product list rendering without page reloads.

### ⚙️ Backend Optimization & DevOps

#### 🧠 Redis Caching  
Initial product and filter loading from MySQL caused latency. I used Redis to cache frequently accessed data, reducing backend DB load and improving response time.

#### 🐳 Docker for Consistent Setup  
Managing MySQL, Redis, and Spring Boot manually was error-prone across environments. I used Docker and Docker Compose to containerize all services, ensuring consistent local setup and faster onboarding.

---

## 💡 Future Improvements

- 🔐 Implement real authentication (JWT or OAuth2)  
- 💳 Integrate a real payment gateway (Stripe or PayPal)  
- 🛠️ Add an admin dashboard for product and order management  
- 🎨 Improve UI with animations and styled-components  
- 🔍 Enhance search with fuzzy matching and sorting options  

---

## 📜 License

This project is open-source and free to use under the [MIT License](LICENSE).
