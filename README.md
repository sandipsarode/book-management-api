# 📚 Book Management API

A RESTful API built using **Express.js** and **MongoDB** to manage a library's book collection. Supports full CRUD operations with proper validations and error handling.

---

## 🚀 Features

- Add new books to the database 📘
- Retrieve all books or a specific book 🔍
- Update book details ✏️
- Delete books 🗑️
- Request validation and error handling 💡

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose (ODM)
- dotenv
- Nodemon
- Postman (for API testing)

---

## 📁 Project Structure

book-management-api/ ├── controllers/ # (Optional - for separation of logic) ├── models/ # Mongoose schema │ └── Book.js ├── routes/ # All API routes │ └── bookRoutes.js ├── .env # Environment variables ├── index.js # Entry point ├── package.json

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd book-management-api
   ```
