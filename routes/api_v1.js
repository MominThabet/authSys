const express = require('express');

const registerRouter = require('./register/register.router');
const apiRouter = express.Router();

apiRouter.use('/register', registerRouter);

module.exports = apiRouter;
