require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const booksRouter = require("./routes/books");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/books", booksRouter);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
