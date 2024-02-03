// NavBar.js
/* eslint-disable no-restricted-globals */

import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';  // Update the path if needed
import "alpinejs";

//import '../styles/NavBar.css';


const NavBar = () => {
  const { isLoggedIn, handleLogout } = useAuth();  // Ensure you're using the correct context values
 
  return (
<nav className="nav bg-white shadow-md">
  <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-4">
   
    
    <div className="flex items-center space-x-4">
      <div className="text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700">
        {isLoggedIn ? (
          <Link to="/" onClick={handleLogout}>Logout</Link>
        ) : (
          <Link to="/">Login</Link>
        )}
      </div>
      <div className='text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700'>
        <Link to="/allusers">Get All Users</Link>
      </div>
      <div className='text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700'>
        <Link to="/fuelpricecalender">Fuel Price</Link>
      </div>
      <div className='text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700'>
        <Link to="/getuser">Get User</Link>
      </div>
      <div className='text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700'>
        <Link to="/updateuser">Update User</Link>
      </div>
    </div>
  </div>
</nav>







  
  );
};

export default NavBar;
