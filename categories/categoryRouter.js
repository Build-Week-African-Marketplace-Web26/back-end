const router = require('express').Router();
const CategoryModel = require('./categoryModel.js');
router.get('/categories', (req, res) => {
    CategoryModel.find()
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get categories' });
        });
});
router.get('/categories/:id', (req, res) => {
    const { id } = req.params;

    CategoryModel.findBy(id)
        .then(categories => {
            if (categories) {
                res.json(categories);
            } else {
                res.status(404).json({ message: 'Could not find categories with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get categories' });
        });
});
module.exports = router;
