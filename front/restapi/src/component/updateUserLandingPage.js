// AllUsers.js
import React, { useState, useEffect } from 'react';
import AuthService from './AuthService ';
import { useAuth } from './AuthContext';

const UpdateUser = () => {
  const [user, setUser] = useState(null); // Use 'null' as the initial state for a single user
  const [error, setError] = useState(null);
  const { isLoggedIn } = useAuth(); // Access the authentication state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!isLoggedIn) {
          // If not logged in, set an error message
          setError('Error fetching user. Please log in and try again.');
          return;
        }

        const userData = await AuthService.updateUser();
        setUser(userData.user); // Assuming 'updateUser' returns a single user
        setError(null);
      } catch (error) {
        console.error('Error fetching user:', error.message);
        setUser(null); // Set user to null in case of an error
        setError('Error fetching user. Please check your token and try again.');
      }
    };

    
  }, [isLoggedIn]); // Dependency on isLoggedIn to re-run the effect when authentication status changes

  return (
    <div>
      {/* User Information Section */}
      <div>
        <h2>User Information</h2>
        {error ? (
          <p>{error}</p>
        ) : user ? (
          <div>
            <p>User ID: {user._id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>No user data available</p>
        )}
      </div>
    </div>
  );
};

export default UpdateUser;
