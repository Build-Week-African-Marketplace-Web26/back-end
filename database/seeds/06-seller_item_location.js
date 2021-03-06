
exports.seed = function(knex) {
    // Deletes ALL existing entries
    // return knex('sellers_items_locations').truncate()
    return knex.raw('TRUNCATE TABLE sellers_items_locations CASCADE')
        .then(function () {
            // Inserts seed entries
            return knex('sellers_items_locations').insert([
                {
                    seller_id: 1,
                    item_id: 1,
                    location_id: 1
                },
            ]);
        });
};
