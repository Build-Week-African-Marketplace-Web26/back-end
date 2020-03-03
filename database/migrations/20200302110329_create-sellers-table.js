
exports.up = function(knex) {
    return knex.schema.createTable('sellers', tbl => {
            tbl.increments();
            tbl.text('username', 128)
                .unique()
                .notNullable();
            tbl.text('password', 128)
                .notNullable();
            tbl.text('name', 128)
            tbl.text('first_name', 128)
            tbl.text('last_name', 128)
            tbl.text('email_address', 128)
                .unique()
                .notNullable();
            tbl.text('about_me', 128)
            tbl.text('token', 128)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sellers')
};
