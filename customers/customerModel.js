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
    return db("customers");
}

function findBy(username) {
    return db("customers")
        .where("username", username)
        .first();
}

function findByID(id) {
    return db("customers")
        .where("id", id)
        .first();
}

async function add(user) {
    const [id] = await db("customers")
        .insert(user, 'id');
    return findByID(id);
}

async function update(changes, username) {
    const id = await db('customers')
        .where("username", username)
        .update(changes, 'id'); //username could be returned instead
    return findByID(id); //I could findBy username
}

function remove(username) {
    return db('customers')
        .where("username", username)
        .del();
}