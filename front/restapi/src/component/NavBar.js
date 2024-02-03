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
<nav x-data="{ open: false }" className="nav bg-white shadow-md">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">
          Tanim's Rest Api
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/" className="text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700">
          Login
        </Link>
        <Link to="/allusers" className="text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700">
        Get All Users
        </Link>
        <Link to="/fuelpricecalender" className="text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700">
        Fuel Price
        </Link>
        <Link to="/getuser" className="text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700">
        Get User
        </Link>
        <Link to="/updateuser" className="text-sm font-semibold text-gray-900 hover:text-blue-700 focus:outline-none focus:text-gray-700">
        Update User
        </Link>
      </div>
    
    </div>
  
  </div>
</nav>



  
  );
};

export default NavBar;
