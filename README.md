# 📝 Scribbly – Your Personal Notebook App

**Scribbly** is a full-stack **MERN (MongoDB, Express, React, Node.js)** web application designed to help users securely **create, edit, and manage personal notes** with authentication.  
It’s built for simplicity, privacy, and accessibility — allowing users to log in from any device, manage their notes efficiently, and keep them safe inside their own **MongoDB database**.

---

## 🌟 Project Overview

Scribbly is your personal digital notebook, offering a seamless and intuitive note-taking experience.  
It’s not just another CRUD app — it’s a secure, token-based system that ensures **every user only sees their own notes**.  

From user authentication to note management, the entire system is built with **clean architecture** and **best MERN practices**:
- The **frontend** is responsive, modern, and built using React + Bootstrap.
- The **backend** is powered by Node.js and Express with JWT authentication.
- The **database** uses MongoDB for fast and flexible storage.

---

## 🚀 Features

- 🔐 **User Authentication** – Signup and login with JWT-based authentication.
- 🧠 **CRUD Notes Management** – Add, edit, delete, and view your personal notes.
- 💾 **MongoDB Database** – All notes are stored and retrieved securely from your MongoDB instance.
- ⚡ **Responsive Frontend** – Clean UI designed with React and Bootstrap for all devices.
- 🔒 **Protected Routes** – Prevents unauthorized access without a valid JWT token.
- 💬 **Alert Notifications** – Instant feedback on every user action (like “Note added” or “Invalid credentials”).
- 🔁 **State Management** – Context API used for global note state sharing across components.
- 🧭 **Smooth Navigation** – React Router ensures seamless page transitions between login, signup, and dashboard.
- ☁️ **Deployed for Free** – Hosted using free-tier services (Render + Netlify).

---

## 🧩 Tech Stack

| Layer | Technology Used | Description |
|-------|------------------|-------------|
| **Frontend** | React.js, Bootstrap | For a dynamic, responsive user interface |
| **Backend** | Node.js, Express.js | REST API handling user authentication and note operations |
| **Database** | MongoDB | Stores user and note data |
| **Authentication** | JWT (JSON Web Token) | Secures user routes and protects private data |
| **Deployment** | Netlify (Frontend), Render (Backend) | Free hosting services for seamless deployment |

---

## 🧰 Installation & Setup (Run Locally)

Follow these steps to set up and run Scribbly on your local system:

---

### Clone the Repository
```bash ...
git clone https://github.com/yourusername/scribbly.git
cd scribbly
```

---

### Install backend dependencies
```bash ...
cd backend
npm install
```

### Install frontend dependencies
```bash ...
cd ../frontend
npm install
```

---

### Install Dependencies

# Install backend dependencies
```bash ...
cd backend
npm install
```

# Install frontend dependencies
```bash ...
cd ../frontend
npm install
```

---

### Set Up Environment Variables
```bash ...
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### Run the Application

# Start backend server
```bash ...
cd backend
npm start
```

# Start frontend server
```bash ...
cd frontend
npm start
```

---