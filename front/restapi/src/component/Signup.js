import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { MdEmail, MdLock,MdAccountCircle } from 'react-icons/md'; // Import icons from the 'react-icons/md' library
import { useAuth } from './AuthContext';  // Update the path if needed
import AuthService from "./AuthService ";
import '../styles/Signup.css';


export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreedToTerms: false,
      });
      const [loading, setLoading] = useState(false); // New state variable

      const navigate = useNavigate();
      const { handleAuthInfo } = useAuth();  // Ensure you're using the correct context values


    
      const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
       
    
        const newValue = type === 'checkbox' ? checked : value;
      // If the input being changed is either 'password' or 'confirmPassword',
      // compare the values to check if they match
      if (name === 'password' || name === 'confirmPassword') {
        const otherField = name === 'password' ? 'confirmPassword' : 'password';
        
        const passwordMatch = newValue === formData[otherField];
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: newValue,
          passwordMatch: passwordMatch,
        }));
      } else {
        // For other fields, simply update the form data
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: newValue,
        }));
      }
       
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, password, confirmPassword,agreedToTerms } = formData;
     // Check if password and confirmPassword match
    if (!formData.passwordMatch) {
      window.alert('Password and Confirm Password do not match.');
      return; // Prevent further execution
    };
     // Start loading
     setLoading(true);
      const signupSuccess = await AuthService.signup(formData);
        // Stop loading
    setLoading(false);

      if (signupSuccess) {
        // Redirect to the AllUsers page upon successful login
        handleAuthInfo();
        navigate('/landingpage');
      } else {
        // Handle unsuccessful login (show error message, etc.)
        console.log('Unsuccessful signup');
      }
    };
    return (
      <div>
        <main className="main">
        {loading ? (
          <div>...Loading</div>
        ):(
      <form className="signup form" onSubmit={handleSubmit}>

      <div className="textInput flex items-center hover:border-blue-500">
      <MdAccountCircle  className="material-icons-outlined" />

          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
          />
         
        </div>

        <div className="textInput flex items-center hover:border-blue-500">
      <MdEmail className="material-icons-outlined" />          <input
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

        <div className="textInput flex items-center hover:border-blue-500">

        <MdLock className="material-icons-outlined" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
         
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleInputChange}
          />
        </div>

        <button
  type="submit"
  className="mb-4 bg-white text-green-500 p-2 border-none rounded cursor-pointer hover:bg-green-500 hover:text-white"
>
          Signup
        </button>

        <div className="info">
  Already have an account? <Link to="/" className="text-blue-500">Login</Link> instead.
</div>
      </form>
        )
}
    </main>
      </div>
    );
        
  
}
