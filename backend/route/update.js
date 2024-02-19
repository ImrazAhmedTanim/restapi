const express = require('express');
const {updateUser} = require('../controller/signup');
const updateRoute = express.Router();
updateRoute.get('/api/updateuser',updateUser);

module.exports=updateRoute;