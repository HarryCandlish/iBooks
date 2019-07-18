const connection = require("./connection");
const knex = require("knex");

function getBooks(testDb) {
  const db = testDb || connection;
  return db("books").select();
}

module.exports = {
  getBooks
};
