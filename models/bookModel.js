const { Pool } = require("pg");
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


const getAllBooks = async () => {
  const result = await pool.query(
    "SELECT * FROM books ORDER BY date_read DESC"
  );
  return result.rows;
};

const addBook = async (book) => {
  const { title, author, cover_url, rating, date_read, review } = book;
  await pool.query(
    "INSERT INTO books (title, author, cover_url, rating, date_read, review) VALUES ($1, $2, $3, $4, $5, $6)",
    [title, author, cover_url, rating, date_read, review]
  );
};

module.exports = { getAllBooks, addBook };
