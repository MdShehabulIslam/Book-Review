const Book = require("../models/bookModel");

exports.getBooks = async (req, res) => {
  const books = await Book.getAllBooks();
  res.render("index", { books });
};

exports.addBook = async (req, res) => {
  const book = {
    title: req.body.title,
    author: req.body.author,
    cover_url: req.body.cover_url,
    rating: parseInt(req.body.rating, 10),
    date_read: req.body.date_read,
    review: req.body.review,
  };

  if (book.rating < 1 || book.rating > 5) {
    return res.status(400).send("Rating must be between 1 and 5.");
  }

  await Book.addBook(book);
  res.redirect("/books");
};
