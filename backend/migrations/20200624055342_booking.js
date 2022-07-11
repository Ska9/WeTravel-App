exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('booking', (table) => {
        table.increments('id').primary();
        table.date('booking_date');
        table.time('booking_hour', { precision: 6 });
        table.integer('length_of_stay');
        table.integer('subscriber_id');
        table.foreign('subscriber_id').references('subscriber.id').onDelete('SET NULL');
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('booking')
};