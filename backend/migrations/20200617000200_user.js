exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', (table) => {
        table.increments('id').primary();
        table.string('firstname');
        table.string('lastname');
        table.string('email');
        table.string('password');
        table.string('tax_registration_number');
        table.string('phone');
        table.string('postal_code');
        table.string('foundation_year');
        table.string('activity_sector');
        table.string('rate');
        table.boolean('is_provider');   
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};