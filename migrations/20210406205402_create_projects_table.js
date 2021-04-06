exports.up = (knex) => knex.schema.createTable('projects', (table) => {
    table.increments('id');
    table.string('title', 100);
    table.integer('user_id').unsigned().notNullable();
    
    table.foreign('user_id').references('users.id').onDelete('CASCADE');

    table.timestamps(true, true);
  });

exports.down = (knex) => knex.schema.dropTable('projects');
