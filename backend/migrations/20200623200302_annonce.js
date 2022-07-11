
exports.up = function(knex,Promise) {
    return knex.schema
    .createTable('annonce', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.integer('product_id');
        table.foreign('product_id').references('product.id').onDelete('SET NULL');
        table.float('discount_rate');
        table.text('description');
        table.date('Date_of_stay');
        table.integer('duration_stay');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('annonce')
  
};
