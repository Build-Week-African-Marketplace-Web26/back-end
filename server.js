const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/authenticate-middleware.js');
const authRouter = require('./auth/auth-router.js');
const sellerRouter = require('./sellers/sellerRouter.js');
const customerRouter = require('./customers/customerRouter.js');
const categoryRouter = require('./categories/categoryRouter.js');
const locationRouter = require('./locations/locationRouter.js');
const itemRouter = require('./items/itemRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/seller', authenticate, sellerRouter);
server.use('/api/customer', authenticate, customerRouter);
server.use('/api/categories', authenticate, categoryRouter);
server.use('/api/locations', authenticate, locationRouter);
server.use('/api/items', authenticate, itemRouter);

module.exports = server;
