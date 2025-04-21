const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json()); // 👈 Middleware to parse JSON

const bookRoutes = require("./routes/bookRoutes"); // 👈 Add this
app.use("/api", bookRoutes); // 👈 Mount routes

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Health check
app.get("/", (req, res) => {
  res.send("Book Management API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
