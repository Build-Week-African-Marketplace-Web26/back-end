
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('sellers').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('sellers').insert([
                {
                    username: 'seeduser1',
                    password: 'seedpassword1',
                    name: 'Seller Name',
                    email_address: 'seller@email.com',
                    about_me: 'I am a seller.',
                },
            ]);
        });
};
