const router = require('express').Router();
const LocationModel = require('./locationModel.js');
router.get('/locations', (req, res) => {
    CategoryModel.find()
        .then(locations => {
            res.json(locations);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get locations' });
        });
});
router.get('/locations/:id', (req, res) => {
    const { id } = req.params;

    CategoryModel.findByID(id)
        .then(locations => {
            if (locations) {
                res.json(locations);
            } else {
                res.status(404).json({ message: 'Could not find locations with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get locations' });
        });
});
module.exports = router;
