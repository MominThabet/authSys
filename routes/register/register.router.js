const express = require('express');
const { httpRegister } = require('./register.controller');
const registerRouter = express.Router();

registerRouter.post('/', httpRegister);

module.exports = registerRouter;
