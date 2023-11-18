const express = require('express');
const {sacredPage} = require('../controller/signup');
const sacred = express.Router();
sacred.get('/sacred',sacredPage);

module.exports=sacred;
