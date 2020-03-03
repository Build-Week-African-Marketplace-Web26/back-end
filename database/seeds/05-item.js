
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('items').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('items').insert([
                {
                    name: 'Seed',
                    description: 'Seed Item 1',
                    price: 30,
                    currency: 'Rand',
                    category_id: 1,
                    category_name: 'Animal Products'
                },
            ]);
        });
};
