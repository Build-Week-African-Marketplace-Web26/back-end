const db = require('../config/dbConfig.js');

module.exports = {
    find,
    findBy,
    add,
    update,
    remove
};

function find() {
    return db("items");
}

function findBy(name) {
    return db("items")
        .where("name", name)
        .first();
}

function findByID(id) {
    return db("items")
        .where("id", id)
        .first();
}

async function add(item) {
    const [id] = await db("items")
        .insert(item, 'id');
    return findByID(id);
}

async function update(changes, name) {
    const id = await db('items')
        .where("name", name)
        .update(changes, 'id');
    return findByID(id);
}

function remove(name) {
    return db('items')
        .where("name", name)
        .del();
}