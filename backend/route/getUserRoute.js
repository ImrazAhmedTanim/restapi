const express = require('express');
const {getUser} = require('../controller/signup');
const getUserRoute = express.Router();
getUserRoute.get('/api/getuser',getUser);

module.exports=getUserRoute;