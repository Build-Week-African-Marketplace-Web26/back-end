
exports.up = function(knex) {
    return knex.schema.createTable('categories_items', tbl => {
        tbl.increments();
        tbl.integer('category_id')
            .notNullable();
        tbl.integer('item_id')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('categories_items')
};
