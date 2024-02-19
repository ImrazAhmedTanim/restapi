const fs = require('fs');

const fuelPriceData = [];
const startYear = 2023; // Adjust based on your data
const startMonth = 1; // January

function generateDataForMonth(year, month) {
  const startDate = new Date(year, month - 1, 2); // Note: Months are 0-indexed in JavaScript Dates
  const endDate = new Date(year, month, 1); // last day of the month

  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const formattedDate = date.toISOString().split('T')[0];
    fuelPriceData.push({
      date: formattedDate,
      price: 80,
      oilName: 'diesel',
      unit: 1,
    });
  }
}

// Generate data for 5 months
for (let i = 0; i <12; i++) {
  generateDataForMonth(startYear, startMonth + i);
}

// Save data to a JSON file
const jsonData = JSON.stringify(fuelPriceData, null, 2);
fs.writeFileSync('fuelData.json', jsonData);

console.log('JSON file created successfully:', 'fuelData.json');
