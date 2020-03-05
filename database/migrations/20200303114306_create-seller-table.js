
exports.up = function(knex) {
    return knex.schema.createTable('sellers', tbl => {
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
        tbl.text('about_me');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sellers')
};
