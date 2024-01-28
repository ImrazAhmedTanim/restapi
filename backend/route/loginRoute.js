const express = require('express');
const {login} = require('../controller/signup');
const loginRoute = express.Router();
loginRoute.post('/api/login',login);

module.exports=loginRoute;
