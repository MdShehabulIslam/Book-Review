const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

router.get("/add", (req, res) => {
  res.render("bookForm");
});

router.post("/add", booksController.addBook);

router.get("/", booksController.getBooks);

module.exports = router;
