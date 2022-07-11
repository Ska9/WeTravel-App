exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('subscriber', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('lastname');
        table.string('phone');
        table.string('username');
        table.string('email');
        table.string('password');
       // table.string('avatar');
       
        
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('subscriber')
};