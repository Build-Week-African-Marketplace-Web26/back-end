const router = require('express').Router();
const ItemModel = require('./itemModel.js');
router.get('/items', (req, res) => {
    ItemModel.find()
        .then(items => {
            res.json(items);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get items' });
        });
});
router.get('/items/:id', (req, res) => {
    const { id } = req.params;

    ItemModel.findBy(id)
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
module.exports = router;
