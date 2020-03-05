const router = require('express').Router();
const ItemModel = require('./itemModel.js');
router.get('/', (req, res) => {
    ItemModel.find()
        .then(items => {
            res.json(items);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get items' });
        });
});
router.get('/:username', (req, res) => {
    const { username } = req.params;

    ItemModel.findBySellerName(username)
        .then(items => {
            if (items) {
                res.json(items);
            } else {
                res.status(404).json({ message: 'Could not find items with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get items' });
        });
});
router.post('/', (req, res) => {
    const itemData = req.body;
    const {seller_id, address, city, state, postal_code} = req.query;
    const location = {
        address: address,
        city: city,
        state: state,
        postal_code: postal_code
    };
    ItemModel.add(itemData)
        .then(item => {
            res.status(201).json(item);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new item' });
        });
});

module.exports = router;
