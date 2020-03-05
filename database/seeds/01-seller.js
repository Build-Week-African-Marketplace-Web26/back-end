
exports.seed = function(knex) {
    // Deletes ALL existing entries
    // return knex('sellers').truncate()
    return knex.raw('TRUNCATE TABLE sellers CASCADE')
        .then(function () {
            // Inserts seed entries
            return knex('sellers').insert([
                {
                    username: 'isam',
                    password: 'seedpassword1',
                    name: 'Irid Samuel',
                    email_address: 'isam@email.com',
                    about_me: 'I run a fresh vegetables business. In my spare time, I enjoy listening to jazz music.'
                },
            ]);
        });
};
