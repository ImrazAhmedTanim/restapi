// ... (imports and database connection remain the same)
const moment = require('moment');
const { PetrolFuelPrice } = require('../models/fuelEnergySchema');
const startYear = 2023; // Adjust based on your data
const startMonth = 1; // January

function injectDataByMonth(year, month) {
  const startDate = moment(`${year}-${month}-01`).startOf('month');
  const endDate = moment(startDate).endOf('month');
  console.log(startDate.toISOString());
  console.log(endDate.toISOString());
  const fuelPriceData = [];

  // Generate 5 months of data objects
  for (let date = moment(startDate); date <= endDate; date.add(1, 'day')) {
    fuelPriceData.push({
      date: date.toISOString(),
      price: 100,
      oilName: "petrol",
      unit: 1
    });
  }
  console.log(fuelPriceData);

  async function injectData() {
    try {
      const options = { 
        ordered: false, // Continue inserting even if some fail
        writeConcern: { wtimeout: 0 } // Set the timeout to 0 for no timeout
      };
  
      const insertedDocuments = await PetrolFuelPrice.insertMany(fuelPriceData, options);
      
      console.log(`Data for ${startDate.format('YYYY-MM')} injected successfully!`);
      console.log("insertMany result:", insertedDocuments);
  
      if (insertedDocuments.length === 0) {
        console.log("No documents inserted. Check for duplicates or other issues.");
      }
    } catch (err) {
      console.error(`Error injecting data for ${startDate.format('YYYY-MM')}:`, err);
    }
  }
  
  
  

  injectData();
}

// Inject data for 5 months
for (let i = 0; i < 5; i++) {
  injectDataByMonth(startYear, startMonth + i);
}
