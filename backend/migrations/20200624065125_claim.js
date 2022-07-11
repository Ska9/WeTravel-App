exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('claim ', (table) => {
        table.increments('id').primary();
        table.string('form');
        table.text('message');
        table.integer('administrator_id');
        table.foreign('administrator_id').references('administrator.id').onDelete('SET NULL');
        table.integer('subscriber_id');
        table.foreign('subscriber_id').references('subscriber.id').onDelete('SET NULL');
        
        
      
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('claim')
};