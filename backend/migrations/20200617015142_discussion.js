exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('discussion', (table) => {
        table.increments('id').primary();
        table.integer('provider_id');
        table.foreign('provider_id').references('provider.id').onDelete('SET NULL');
        table.text('message');
        table.datetime('creation_date', { precision: 6 }).defaultTo(knex.fn.now(6))
        
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('discussion')
};