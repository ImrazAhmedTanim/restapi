const express = require('express');
const {signup} = require('../controller/signup');
const signupRoute = express.Router();
signupRoute.post('/api/signup',signup);

module.exports=signupRoute;
