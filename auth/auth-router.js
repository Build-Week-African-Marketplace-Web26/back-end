const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CustomerModel = require('../customers/customerModel.js');
const SellerModel = require('../sellers/sellerModel.js');
const {jwtSecret} = require('../config/secrets.js');

router.post('/register/seller', (req, res) => {
    // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8); //for dev only
    user.password = hash;
    SellerModel.add(user)
        .then(saved => {
            console.log('seller register endpoint reached');
            res.status(201).json(saved);
        })
        .catch(error => {
            console.log('seller register endpoint reached err');
            res.status(500).json(error);
        });
});

router.post('/login/seller', (req, res) => {
    // implement login
    const {username, password} = req.body;
    SellerModel.findBy(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    user: `${user.username}`,
                    token,
                });
            } else {
                res.status(401).json({message: 'Invalid credentials provided'});
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/register/customer', (req, res) => {
    // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8); //for dev only
    user.password = hash;
    CustomerModel.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login/customer', (req, res) => {
    // implement login
    const {username, password} = req.body;
    CustomerModel.findBy(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    user: `${user.username}`,
                    token,
                });
            } else {
                res.status(401).json({message: 'Invalid credentials provided'});
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: '2h'
    };
    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
