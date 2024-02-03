// Login.js

import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Correct import statement
import { MdEmail, MdLock } from 'react-icons/md'; // Import icons from the 'react-icons/md' library
import { useAuth } from './AuthContext';  // Update the path if needed
import AuthService from "./AuthService ";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // New state variable

  const { handleAuthInfo } = useAuth();  // Ensure you're using the correct context values
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Start loading
setLoading(true);
    const loginSuccess = await AuthService.login(formData);
         // Stop loading
         setLoading(false);



    if (loginSuccess) {
      handleAuthInfo();  // Call the context function to update login status
      navigate('/landingpage');
    } else {
      console.log('Unsuccessful login');
    }
  };

  return (
    <div>
<main className="main">
  {loading?(
 <div className='flex items-center justify-center min-h-screen'>
 <button type="button" className="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
     <div className="flex items-center justify-center m-[10px]"> 
         <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
         <div className="ml-2"> Processing... plz wait as the site is hosted in free server</div>
     </div>
 </button>
</div>        ):(
  <form className="login form" onSubmit={handleSubmit}>
    <div className="textInput flex items-center hover:border-blue-500">
      <MdEmail className="material-icons-outlined" />
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleInputChange}
      />
    </div>
    <div className="textInput flex items-center hover:border-blue-500">
      <MdLock className="material-icons-outlined" />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleInputChange}
      />
    </div>
    <button
  type="submit"
  className="mb-4 bg-white text-green-500 p-2 border-none rounded cursor-pointer hover:bg-green-500 hover:text-white"
>Login</button>
    <div className="info">
  Don't have an account? <Link to="/signup" className="text-blue-500">Signup</Link> instead.
</div>
  </form>
  )}
</main>
    </div>
  );
};

export default Login;
