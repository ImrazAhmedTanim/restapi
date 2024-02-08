import React, { useState } from 'react';
import axios from 'axios';

const FuelPriceCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [fuelPrices, setFuelPrices] = useState({});
  const [loading, setLoading] = useState(false); // New state variable


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
    setLoading(true);

    // Make a request to fetch fuel prices for the selected date using Axios
    axios.get(`https://restapi-ns7b.onrender.com/fuel-prices/${selectedDate}`)
    
      .then(response => {
        setLoading(false);
        console.log('Axios Response:', response.data); // Log the response data
        setFuelPrices(response.data);
      })
      .catch(error => console.error('Error fetching fuel prices:', error));
  };

  return (
    <div>
      { loading ? (
   <div className='flex items-center justify-center min-h-screen'>
   <button type="button" className="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
       <div className="flex items-center justify-center m-[10px]"> 
           <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
           <div className="ml-2"> Processing... </div>
       </div>
   </button>
 </div> 
      ):
      (
      <div>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <p>Petrol Price: {`${fuelPrices.petrolDate}--- ${fuelPrices.petrol} tk` || 'N/A'}</p>
        <p>Diesel Price: {`${fuelPrices.dieselDate}---${fuelPrices.diesel} tk` || 'N/A'}</p>
        <p>Octane Price: {`${fuelPrices.octaneDate}---${fuelPrices.octane} tk` || 'N/A'}</p>
      </div>
        </div>
      )}
    </div>
  );
};

export default FuelPriceCalendar;
