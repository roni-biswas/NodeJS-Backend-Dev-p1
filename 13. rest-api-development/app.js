const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// dummy data
const books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
];

// intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore api",
  });
});

// get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running on port ${port}.`);
});
