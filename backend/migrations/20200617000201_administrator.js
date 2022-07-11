exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('administrator ', (table) => {
        table.increments('id').primary();
        table.string('privilege');
        table.string('firstname');
        table.string('lastname');
        table.string('email');
        table.string('password');
      
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('administrator ')
};