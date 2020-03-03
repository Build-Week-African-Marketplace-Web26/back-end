
exports.up = function(knex) {
    return knex.schema.createTable('sellers_items_locations', tbl => {
        tbl.increments();
        tbl.integer('seller_id')
            .notNullable()
            .references('id')
            .inTable('sellers');
        tbl.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
        tbl.integer('location_id')
            .notNullable()
            .references('id')
            .inTable('locations');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sellers_items_locations')
};
