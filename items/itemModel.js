const db = require('../config/dbConfig.js');

module.exports = {
    find,
    findBy,
    findByID,
    findBySellerName,
    add,
    update,
    remove
};

function find() {
    return db("categories_items as ci")
        .join("items as i", "ci.item_id", "i.id")
        .join("categories as c", "ci.category_id", "c.id")
        .select("i.name", "i.description", "i.price", "i.currency", "i.category_id", "c.name as category_name");
}

function findBy(name) {
    return db("categories_items as ci")
        .join("items as i", "ci.item_id", "i.id")
        .join("categories as c", "ci.category_id", "c.id")
        .select("i.name", "i.description", "i.price", "i.currency", "i.category_id", "c.name as category_name")
        .where("i.name", name)
        .first();
}

function findBySellerName(username) {
    return db("sellers_items_locations as sil")
        .join("sellers as s", "sil.seller_id", "s.id")
        .join("items as i", "sil.item_id", "i.id")
        .join("locations as l", "sil.location_id", "l.id")
        .select("i.name", "i.description", "i.price", "i.currency", "i.category_id", "s.id as seller_id", "l.id as location_id", "l.address as location_address")
        .where("s.username", username)
}

function findByID(id) {
    return db("categories_items as ci")
        .join("items as i", "ci.item_id", "i.id")
        .join("categories as c", "ci.category_id", "c.id")
        .select("i.name", "i.description", "i.price", "i.currency", "i.category_id", "c.name as category_name")
        .where("i.id", id)
        .first();
}

async function add(item, sil, ci) {
    const [id] = await db("items")
        .insert(item, 'id');
    await db("sellers_items_locations")
        .insert(sil);
    if (findBy(item.name))
    await db("categories_items")
        .insert(sil);
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