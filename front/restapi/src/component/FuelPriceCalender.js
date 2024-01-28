import React, { useState } from 'react';
import axios from 'axios';

const FuelPriceCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [fuelPrices, setFuelPrices] = useState({});

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const date = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${date}`;
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  const handleSubmit = () => {
    // Make a request to fetch fuel prices for the selected date using Axios
    axios.get(`http://localhost:3000/fuel-prices/${selectedDate}`)
      .then(response => {
        console.log('Axios Response:', response.data); // Log the response data
        setFuelPrices(response.data);
      })
      .catch(error => console.error('Error fetching fuel prices:', error));
  };

  return (
    <div>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <p>Petrol Price: {fuelPrices.petrol || 'N/A'}</p>
        <p>Diesel Price: {fuelPrices.diesel || 'N/A'}</p>
        <p>Octane Price: {fuelPrices.octane || 'N/A'}</p>
      </div>
    </div>
  );
};

export default FuelPriceCalendar;
