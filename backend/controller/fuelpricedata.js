const express = require('express');
const { PetrolFuelPrice, OctaneFuelPrice, DieselFuelPrice } = require('../models/fuelEnergySchema');

const fuelpricedata = async (req, res) => {
  const { date } = req.params;

  try {
    const petrolPrice = await PetrolFuelPrice.findOne({ date });
    const octanePrice = await OctaneFuelPrice.findOne({ date });
    const dieselPrice = await DieselFuelPrice.findOne({ date });

    if (!petrolPrice && !octanePrice && !dieselPrice) {
      // Respond with a 404 status if no data is found for the specified date
      return res.status(404).json({ error: 'Fuel prices not found for the specified date' });
    }

    res.json({ petrol: petrolPrice?.price, octane: octanePrice?.price, diesel: dieselPrice?.price });
  } catch (error) {
    console.error('Error fetching fuel prices:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = fuelpricedata;
