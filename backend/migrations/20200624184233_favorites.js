exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('favorites ', (table) => {
        table.increments('id').primary();
        table.string('liste');
        table.integer('product_id');
        table.foreign('product_id').references('product.id').onDelete('SET NULL');
        table.integer('subscriber_id');
        table.foreign('subscriber_id').references('subscriber.id').onDelete('SET NULL');
        
        
      
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('favorites')
};