const { onUpdateTrigger } = require("../knexfile");

exports.up = async (knex) => 
  knex.schema.createTable('projects', (table) => {
    table.increments('id');
    table.string('title', 100);
    table.integer('user_id').unsigned().notNullable();
    
    table.foreign('user_id').references('users.id').onDelete('CASCADE');

    table.timestamps(true, true);
  })
  .then(() => knex.raw(onUpdateTrigger('users')));

exports.down = async (knex) => knex.schema.dropTable('projects');
