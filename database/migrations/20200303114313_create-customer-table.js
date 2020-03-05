
exports.up = function(knex) {
    return knex.schema.createTable('customers', tbl => {
        tbl.increments();
        tbl.text('username')
            .unique()
            .notNullable();
        tbl.text('password')
            .notNullable();
        tbl.text('name');
        tbl.text('email_address')
            .unique()
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customers')
};
