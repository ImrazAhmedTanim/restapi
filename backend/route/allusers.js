const express = require('express');
const {login,sacredPage,allUser} = require('../controller/signup');
const allusers = express.Router();
allusers.get('/api/allusers',allUser);

module.exports=allusers;
