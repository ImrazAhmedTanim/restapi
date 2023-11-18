const express = require('express');
const {signup} = require('../controller/signup');
const signupRoute = express.Router();
signupRoute.post('/signup',signup);

module.exports=signupRoute;
