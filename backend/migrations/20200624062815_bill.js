exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('bill', (table) => {
        table.increments('id').primary();
        table.date('bill_date');
        table.date('Date_payment');
        table.integer('bill_number');
        table.float('rate');
        table.string('mode_of_payment');
        table.integer('booking_id');
        table.foreign('booking_id').references('booking.id').onDelete('SET NULL');
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bill')
};