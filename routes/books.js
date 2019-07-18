const express = require("express");
const router = express.Router();

const { getBooks } = require("../db/books");

router.get("/", (req, res) => {
  getBooks()
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

module.exports = router;
