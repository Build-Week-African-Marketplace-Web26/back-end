
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('categories_items').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('categories_items').insert([
                {
                    category_id: 1,
                    item_id: 1
                },
            ]);
        });
};
