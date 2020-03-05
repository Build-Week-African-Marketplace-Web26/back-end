
exports.up = function(knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments();
        tbl.text('name')
            .unique()
            .notNullable();
        tbl.text('description')
        tbl.float('price')
            .notNullable()
            .unsigned();
        tbl.text('currency')
            .notNullable();
        tbl.integer('category_id')
            .notNullable()
            .references('id')
            .inTable('categories');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items')
};
