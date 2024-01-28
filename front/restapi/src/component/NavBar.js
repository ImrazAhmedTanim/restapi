// NavBar.js
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';  // Update the path if needed
//import '../styles/NavBar.css';


const NavBar = () => {
  const { isLoggedIn, handleLogout } = useAuth();  // Ensure you're using the correct context values

  return (
<nav className="nav">
  <ul className="navbar flex flex-row justify-end ml-auto">
  <li className="mb-4  bg-violet-500  border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
          {isLoggedIn ? (
            <Link to="/" onClick={handleLogout}>Logout</Link>
          ) : (
            <Link to="/">Login</Link>
          )}
    </li>

    <li className="mb-4 bg-violet-400  border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
      <Link to="/allusers">Get All Users</Link>
    </li>

    <li className="mb-4 bg-violet-300  border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
      <Link to="/fuelpricecalender">Fuel Price</Link>
    </li>

    <li className="mb-4 bg-violet-200  border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
      <Link to="/getuser">Get User</Link>
    </li>

    <li className="mb-4 bg-violet-100 border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
      <Link to="/updateuser">Update User</Link>
    </li>
  </ul>
</nav>


  
  );
};

export default NavBar;
