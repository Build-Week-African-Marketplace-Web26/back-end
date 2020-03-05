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
    return db("categories");
}

function findBy(name) {
    return db("categories")
        .where("name", name)
        .first();
}

function findByID(id) {
    return db("categories")
        .where("id", id)
        .first();
}

async function add(user) {
    const [id] = await db("categories")
        .insert(user, 'id');
    return findByID(id);
}

async function update(changes, username) {
    await db('categories')
        .where("username", username)
        .update(changes, 'id');
    return findByID(id);
}

function remove(name) {
    return db('categories')
        .where("name", name)
        .del();
}