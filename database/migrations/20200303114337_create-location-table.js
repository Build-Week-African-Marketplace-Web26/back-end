
exports.up = function(knex) {
    return knex.schema.createTable('locations', tbl => {
        tbl.increments();
        tbl.text('address', 128)
        tbl.text('city', 128)
            .notNullable();
        tbl.text('state', 128)
            .notNullable();
        tbl.integer('postal_code')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locations')
};
