exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('geoname_tunisia', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.float('longitude');
        table.float('latitude');
        table.string('country');
        table.string('state');
        
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('geoname_tunisia')
};