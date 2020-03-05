const db = require('../config/dbConfig.js');

module.exports = {
    find,
    findByAddress,
    findByCity,
    findByState,
    findByPostalCode,
    findByID,
    add,
    update,
    remove
};

function find() {
    return db("locations");
}

function findByAddress(address) {
    return db("locations")
        .where("address", address)
        .first();
}

function findByCity(city) {
    return db("locations")
        .where("city", city)
        .first();
}

function findByState(state) {
    return db("locations")
        .where("state", state)
        .first();
}

function findByPostalCode(postal_code) {
    return db("locations")
        .where("postal_code", postal_code)
        .first();
}

function findByID(id) {
    return db("locations")
        .where("id", id)
        .first();
}

async function add(location) {
    const [id] = await db("locations")
        .insert(location, 'id');
    return findByID(id);
}

async function update(changes, id) {
    await db('locations')
        .where("id", id)
        .update(changes, 'id');
    return findByID(id);
}

function remove(name) {
    return db('locations')
        .where("name", name)
        .del();
}