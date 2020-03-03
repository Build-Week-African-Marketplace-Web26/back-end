
exports.up = function(knex) {
    return knex.schema.createTable('sellers_items_locations', tbl => {
        tbl.increments();
        tbl.integer('seller_id')
            .notNullable();
        tbl.integer('item_id')
            .notNullable();
        tbl.integer('market_id')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sellers_items_locations')
};
