const router = require('express').Router();
const SellerModel = require('./sellerModel.js');
router.get('/', (req, res) => {
    SellerModel.find()
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get categories' });
        });
});
router.put('/:username', (req, res) => {
    let user = req.body;
    let {username} = req.params;
    SellerModel.findBy(username)
        .then(seller => {
            if (seller) {
                SellerModel.update(user, username)
                    .then(updatedSeller => {
                        res.status(201).json(updatedSeller);
                    })
            } else {
                res.status(404).json({message: 'Could not find seller with given username'})
            }
        })
         .catch( err => {
            res.status(500).json({message: 'Failed to update seller'});
         })
});
router.delete('/:username', (req, res) => {
    const { username } = req.params;
    SellerModel.remove(username)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find seller with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete seller' });
        });
});
module.exports = router;
