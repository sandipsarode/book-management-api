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
   git clone https://github.com/sandipsarode/book-management-api.git
   cd book-management-api
   ```
   npm install

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

npm run dev

## 🔗 API Endpoints

Method | Endpoint | Description
POST | /api/books | Add a new book
GET | /api/books | Get all books
GET | /api/books/:id | Get a single book by ID
PUT | /api/books/:id | Update book details
DELETE | /api/books/:id | Delete a book

## 📌 Book Schema

{
"title": "String (required)",
"author": "String (required)",
"publishedYear": "Number (required)",
"genre": "Enum: Fiction | Non-Fiction | Sci-Fi | Mystery"
}

## 🧪 API Testing with Postman

1. Import the provided Postman collection (if available).

2. Use endpoints with appropriate HTTP methods.

3. Set Content-Type: application/json in headers for POST/PUT.

4. Test edge cases like missing fields, invalid IDs, etc.

## 📝 License

This project is for educational purposes only. You are free to use and modify it.

## 🙌 Author

Made with ❤️ by Sandip Sarode

---
