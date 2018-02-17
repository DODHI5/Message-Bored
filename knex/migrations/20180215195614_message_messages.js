exports.up = function(knex, Promise) {
  return knex.schema.createTable("messages", table => {
    table.increments();
    table.text("body").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table
      .integer("author_id")
      .references("id")
      .inTable("users");
    table
      .integer("topic_id")
      .references("id")
      .inTable("topics");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("messages");
};
