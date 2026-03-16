# React + Flask CRUD Application

## 📌 Project Overview

This is a **full-stack CRUD application** built using **React (Frontend)**, **Flask (Backend)**, and **MySQL (Database)**.

The application allows users to **create, view, and delete users** with email validation and pagination.

---

## 🧰 Tech Stack

**Frontend**

* React
* Material UI
* Axios
* React Hook Form
* Yup Validation

**Backend**

* Flask (Python)
* Flask CORS
* REST API

**Database**

* MySQL

---

## ⚙️ Features

* Create user
* View users
* Delete user
* Email validation (Frontend + Backend)
* Pagination
* REST API architecture
* Material UI responsive design

---

## 📁 Project Structure

```
react-flask-crud
│
├── python-crud
│   ├── app.py
│   └── crud.py
│
└── react-crud
    ├── src
    ├── public
    └── package.json
```

---

## 🚀 Installation

### 1️⃣ Clone Repository

```
git clone https://github.com/gurubodke/react-flask-crud.git
```

---

### 2️⃣ Backend Setup

```
cd python-crud
pip install flask flask-cors mysql-connector-python
python app.py
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```
cd react-crud
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🗄 Database Setup

Create database in MySQL:

```
CREATE DATABASE pythoncrud;
```

Create table:

```
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100)
);
```

---

## 🔌 API Endpoints

| Method | Endpoint    | Description   |
| ------ | ----------- | ------------- |
| GET    | /users      | Get all users |
| POST   | /users      | Create user   |
| DELETE | /users/{id} | Delete user   |

---

## 🧠 Architecture

```
React Frontend
      ↓
Axios API Calls
      ↓
Flask REST API
      ↓
MySQL Database
```

---

## 📷 Screenshots

(Add screenshots of your application UI here)

---

## 👨‍💻 Author

**Gurudas Bodake**

GitHub:
https://github.com/gurubodke
