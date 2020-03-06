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
router.delete('/:username', (req, res) => {
    const { username } = req.params;
    CustomerModel.remove(username)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find customer with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete customer' });
        });
});
module.exports = router;
