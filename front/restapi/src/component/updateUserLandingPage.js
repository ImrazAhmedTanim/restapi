// AllUsers.js
import React, { useState, useEffect } from 'react';
import AuthService from './AuthService ';
import { useAuth } from './AuthContext';

const UpdateUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { isLoggedIn } = useAuth(); // Access the authentication state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!isLoggedIn) {
          // If not logged in, set an error message
          setError('Error fetching users. Please log in and try again.');
          return;
        }

        const userData = await AuthService.updateUser();
        setUsers(userData.users);
        
        setError(null);
      } catch (error) {
        console.error('Error fetching users:', error.message);
        setUsers([]);
        setError('Error fetching users. Please check your token and try again.');
      }
    };

    fetchUsers();
  }, [isLoggedIn]); // Dependency on isLoggedIn to re-run the effect when authentication status changes

  return (
    <div>
      {/* User List Section */}
      <div>
        <h2>User List</h2>
        {error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                User ID: {user._id}, Name: {user.name}, Email: {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default UpdateUser;
