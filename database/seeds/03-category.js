
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('categories').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('categories').insert([
                {
                    name: 'Animal Products'
                },
                {
                    name: 'Beans'
                },
                {
                    name: 'Cereals - Maize'
                },
                {
                    name: 'Cereals - Other'
                },
                {
                    name: 'Cereals - Rice'
                },
                {
                    name: 'Fruits'
                },
                {
                    name: 'Other'
                },
                {
                    name: 'Peas'
                },
                {
                    name: 'Roots & Tubers'
                },
                {
                    name: 'Seeds & Nuts'
                },
                {
                    name: 'Vegetables'
                }
            ]);
        });
};
