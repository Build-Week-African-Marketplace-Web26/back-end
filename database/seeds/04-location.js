
exports.seed = function(knex) {
    // Deletes ALL existing entries
    // return knex('locations').truncate()
    return knex.raw('TRUNCATE TABLE locations CASCADE')
        .then(function () {
            // Inserts seed entries
            return knex('locations').insert([
                {
                    address: '123 Seed Road',
                    city: 'Seedy',
                    state: 'State',
                    postal_code: '456789'
                },
            ]);
        });
};
