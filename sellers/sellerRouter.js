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
                res.status(404).json({message: 'Could find seller with given username'})
            }
        })
         .catch( err => {
            res.status(500).json({message: 'Failed to update seller'});
         })
});
module.exports = router;
