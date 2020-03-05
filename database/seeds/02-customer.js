
exports.seed = function(knex) {
    // Deletes ALL existing entries
    // return knex('customers').truncate()
    return knex.raw('TRUNCATE TABLE customers CASCADE')
        .then(function () {
            // Inserts seed entries
            return knex('customers').insert([
                {
                    username: 'jsue',
                    password: 'seedpassword2',
                    name: 'Jeannette Sue',
                    email_address: 'jsue@email.com'
                },
            ]);
        });
};
