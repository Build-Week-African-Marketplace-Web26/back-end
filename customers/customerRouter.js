const router = require('express').Router();
const CustomerModel = require('./customerModel.js');
router.put('/:username', (req, res) => {
    let user = req.body;
    let {username} = req.params;
    CustomerModel.findBy(username)
        .then(seller => {
            if (seller) {
                CustomerModel.update(user, username)
                    .then(updatedSeller => {
                        res.status(201).json(updatedSeller);
                    })
            } else {
                res.status(404).json({message: 'Could not find customer with given username'})
            }
        })
        .catch( err => {
            res.status(500).json({message: 'Failed to update seller'});
        })
});
module.exports = router;
