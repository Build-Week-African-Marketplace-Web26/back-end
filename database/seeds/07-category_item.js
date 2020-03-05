
exports.seed = function(knex) {
    // Deletes ALL existing entries
    // return knex('categories_items').truncate()
    return knex.raw('TRUNCATE TABLE categories_items CASCADE')
        .then(function () {
            // Inserts seed entries
            return knex('categories_items').insert([
                {
                    category_id: 10,
                    item_id: 1
                },
            ]);
        });
};
