const express = require('express');
const {updateUser} = require('../controller/signup');
const updateRoute = express.Router();
updateRoute.put('/:id',updateUser);

module.exports=updateRoute;