
exports.up = function(knex) {
    return knex.schema.createTable('sellers', tbl => {
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
        tbl.text('about_me');
        tbl.text('token');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sellers')
};
