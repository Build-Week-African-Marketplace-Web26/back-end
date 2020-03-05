
exports.up = function(knex) {
    return knex.schema.createTable('categories_items', tbl => {
        tbl.increments();
        tbl.integer('category_id')
            .notNullable()
            .references('id')
            .inTable('categories');
        tbl.integer('item_id')
            .unique()
            .notNullable()
            .references('id')
            .inTable('items');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('categories_items')
};
