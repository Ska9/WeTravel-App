exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('product', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('product_type');
        table.text('description');
        table.float('price');
        table.float('number_people');
        table.datetime('start_date', { precision: 6 }).defaultTo(knex.fn.now(6))
        table.datetime('end_date', { precision: 6 }).defaultTo(knex.fn.now(6))
        table.integer('establishment_id');
        table.foreign('establishment_id').references('establishment.id').onDelete('SET NULL');

    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('product')
};