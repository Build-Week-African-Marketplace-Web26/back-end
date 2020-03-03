
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('customers').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('customers').insert([
                {
                    username: 'seeduser2',
                    password: 'seedpassword2',
                    name: 'Customer Name',
                    first_name: 'Customer',
                    last_name: 'Name',
                    email_address: 'customer@email.com',
                    token: 'sfnih3risafsa2903;ifshf3r09f0s;;iafsdi02'
                },
            ]);
        });
};
