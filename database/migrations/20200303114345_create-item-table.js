
exports.up = function(knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description')
        tbl.float('price')
            .notNullable()
            .unsigned();
        tbl.text('currency', 128)
            .notNullable();
        tbl.integer('category_id')
            .notNullable()
            .references('id')
            .inTable('categories');
        tbl.text('category_name', 128)
            .notNullable()
            .references('name')
            .inTable('categories');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items')
};
