const router = require('express').Router();
const LocationModel = require('./locationModel.js');
router.get('/', (req, res) => {
    LocationModel.find()
        .then(locations => {
            res.json(locations);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get locations' });
        });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;

    LocationModel.findByID(id)
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
