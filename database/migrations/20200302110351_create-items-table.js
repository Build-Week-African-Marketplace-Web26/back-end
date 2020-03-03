
exports.up = function(knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description')
        tbl.float('price')
            .notNullable();
        tbl.text('currency', 128)
            .notNullable();
        tbl.integer('category_id')
            .notNullable();
        tbl.text('category_name', 128)
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items')
};
