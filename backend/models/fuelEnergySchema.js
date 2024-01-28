const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FuelPriceSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  oilName: {
    type: String,
    required: true,
  },
  unit: {
    type: Number,
    required: true,
  },
});

const PetrolFuelPrice = mongoose.model('PetrolFuelPrice', FuelPriceSchema);
const OctaneFuelPrice = mongoose.model('OctaneFuelPrice', FuelPriceSchema);
const DieselFuelPrice = mongoose.model('DieselFuelPrice', FuelPriceSchema);

module.exports = {PetrolFuelPrice,OctaneFuelPrice,DieselFuelPrice};
