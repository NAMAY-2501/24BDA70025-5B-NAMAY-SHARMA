# 🎓 Student Management System (MVC CRUD)

A full-stack web application to manage student records using **Node.js, Express, MongoDB, and EJS** following the **MVC architecture**.

---

## 🚀 Features

* ➕ Add new students
* 📋 View all students
* ✏️ Edit student details
* ❌ Delete students
* 📦 RESTful API endpoints
* 🧩 MVC structured codebase

---

## 🏗️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas)
* **ORM:** Mongoose
* **Frontend:** EJS (Server-side rendering)
* **Other:** dotenv, cors

---

## 📁 Project Structure

```
student-management/
│
├── config/
│   └── db.js
├── models/
│   └── student.model.js
├── controllers/
│   └── student.controller.js
├── routes/
│   ├── student.routes.js
│   └── student.view.routes.js
├── views/
│   └── students/
│       ├── index.ejs
│       └── edit.ejs
│
├── .env
├── index.js
├── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone <your-repo-link>
cd student-management
```

---

### 2️⃣ Install Dependencies

```
pnpm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file in root:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

### 4️⃣ Run the Project

```
pnpm dev
```

---

### 5️⃣ Open in Browser

```
http://localhost:3000/view/students
```

---

## 🔗 API Endpoints

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | /students     | Get all students  |
| POST   | /students     | Create student    |
| GET    | /students/:id | Get student by ID |
| PUT    | /students/:id | Update student    |
| DELETE | /students/:id | Delete student    |

---

## 🧠 MVC Architecture

* **Model:** Defines student schema (MongoDB)
* **View:** EJS templates (UI)
* **Controller:** Handles logic and operations
* **Routes:** Connects endpoints to controllers

---

## 🌐 Deployment

* Backend can be deployed on platforms like Render or Vercel
* MongoDB hosted on MongoDB Atlas

---

## 🎯 Learning Outcomes

* Understanding of full-stack development
* Implementation of CRUD operations
* Hands-on experience with MongoDB and Mongoose
* Practical use of MVC design pattern

---

## 👨‍💻 Author

**Namay Sharma**

---

## 📌 Note

* Ensure MongoDB Atlas is properly configured
* Add IP access (0.0.0.0/0) for connectivity

---

## ⭐ Acknowledgement

This project was developed as part of a full-stack development lab experiment.

---
