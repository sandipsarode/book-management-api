const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.post("/books", async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;

    if (!title || !author || !publishedYear || !genre) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newBook = new Book({ title, author, publishedYear, genre });
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error creating book:", error); // 👈 this helps
    res.status(500).json({ message: "Error adding book", error });
  }
});

// 2. Get all books (GET /api/books)
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books", error });
  }
});

// 3. Get a single book by ID (GET /api/books/:id)
router.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving book", error });
  }
});

// 4. Update book details (PUT /api/books/:id)
router.put("/books/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
});

// 5. Delete a book (DELETE /api/books/:id)
router.delete("/books/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
});

module.exports = router;
