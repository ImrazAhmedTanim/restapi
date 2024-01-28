const express = require('express');
const { PetrolFuelPrice, OctaneFuelPrice, DieselFuelPrice } = require('../models/fuelEnergySchema');

const routerfuel = express.Router();

// POST endpoint for Petrol prices
routerfuel.post('/petrol', async (req, res) => {
  try {
    const { date, price, unit } = req.body;
    const newPetrolPrice = new PetrolFuelPrice({ date, price, oilName: 'petrol', unit });
    await newPetrolPrice.save();
    res.status(201).json(newPetrolPrice);
  } catch (error) {
    console.error('Error posting Petrol price:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST endpoint for Octane prices
/*
router.post('/octane', async (req, res) => {
  try {
    const { date, price, unit } = req.body;
    const newOctanePrice = new OctaneFuelPrice({ date, price, oilName: 'octane', unit });
    await newOctanePrice.save();
    res.status(201).json(newOctanePrice);
  } catch (error) {
    console.error('Error posting Octane price:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
*/

// POST endpoint for Diesel prices
/*
router.post('/diesel', async (req, res) => {
  try {
    const { date, price, unit } = req.body;
    const newDieselPrice = new DieselFuelPrice({ date, price, oilName: 'diesel', unit });
    await newDieselPrice.save();
    res.status(201).json(newDieselPrice);
  } catch (error) {
    console.error('Error posting Diesel price:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
*/

module.exports = routerfuel;
