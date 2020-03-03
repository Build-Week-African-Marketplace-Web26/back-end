const db = require('../config/dbConfig.js');

module.exports = {
    find,
    findBy,
    add
};

function find() {
    return db("marketplace");
}

function findBy(username) {
    return db("marketplace")
        .where("username", username)
        .first();
}

function add(user) {
    return db("marketplace")
        .insert(user);
}