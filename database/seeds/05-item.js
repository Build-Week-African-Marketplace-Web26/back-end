
exports.seed = function(knex) {
    // Deletes ALL existing entries
    // return knex('items').truncate()
    return knex.raw('TRUNCATE TABLE items CASCADE')
        .then(function () {
            // Inserts seed entries
            return knex('items').insert([
                {
                    name: 'Seed',
                    description: 'A seed used to grow vegetables.',
                    price: 30,
                    currency: 'Rand',
                    category_id: 10
                },
            ]);
        });
};
