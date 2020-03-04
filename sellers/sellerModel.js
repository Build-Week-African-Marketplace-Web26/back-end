const db = require('../config/dbConfig.js');

module.exports = {
    find,
    findBy,
    findByID,
    add,
    update,
    remove
};

function find() {
    return db("sellers");
}

function findBy(username) {
    return db("sellers")
        .where("username", username)
        .first();
}

function findByID(id) {
    return db("sellers")
        .where("id", id)
        .first();
}

function add(user) {
    return db("sellers")
        .insert(user);
    // return findByID(id);
}

async function update(changes, username) {
    await db('sellers')
        .where("username", username)
        .update(changes, 'id');
    return findByID(id);
}

function remove(username) {
    return db('sellers')
        .where("username", username)
        .del();
}