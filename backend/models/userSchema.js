const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
 
});

// Method to compare the provided password with the stored hashed password

const Restapi = mongoose.model('Restapi', userSchema);

module.exports = Restapi;
