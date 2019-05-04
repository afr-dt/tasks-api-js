exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', t => {
    t.increments('id')
      .unsigned()
      .primary();
    t.string('title').notNull();
    t.boolean('is_done').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task');
};
