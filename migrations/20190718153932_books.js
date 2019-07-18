exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", function(table) {
    table.increments("id").primary;
    table.integer("user_id");
    table.string("title");
    table.string("author");
    table.string("description");
    table.string("genre");
    table.string("year_written");
    table.integer("pages");
    table.boolean("read");
    table.boolean("want_to_read");
    table.boolean("reading");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books");
};
