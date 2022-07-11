exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('establishment', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('image');
        table.text('description');
        table.float('longitude');
        table.float('latitude');
        table.integer('city_id');
        table.foreign('city_id').references('geoname_tunisia.id').onDelete('SET NULL');
        table.integer('provider_id');
        table.foreign('provider_id').references('provider.id').onDelete('SET NULL');

    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('establishment')
};