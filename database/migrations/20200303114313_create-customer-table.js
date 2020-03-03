
exports.up = function(knex) {
    return knex.schema.createTable('customers', tbl => {
        tbl.increments();
        tbl.text('username')
            .unique()
            .notNullable();
        tbl.text('password')
            .notNullable();
        tbl.text('name');
        tbl.text('first_name');
        tbl.text('last_name');
        tbl.text('email_address')
            .unique()
            .notNullable();
        tbl.text('token');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customers')
};
