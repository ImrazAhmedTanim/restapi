const express = require('express');
const fuelpricedata = require('../controller/fuelpricedata');
const fuelRoute = express.Router();
fuelRoute.get('/fuel-prices/:date',fuelpricedata);

module.exports=fuelRoute;
