// AuthService.js

import axios from 'axios';

const AuthService = {
  signup: async (credentials) => {
    try {
      const response = await axios.post('https://restapi-ns7b.onrender.com/api/signup', credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token); // Store the token in localStorage
        return true; // Indicate successful login
      } else {
        return false; // Indicate unsuccessful login
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      return false; // Indicate unsuccessful login
    }
  },
  login: async (credentials) => {
    try {
      const response = await axios.post('https://restapi-ns7b.onrender.com/api/login', credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token); // Store the token in localStorage
        return true; // Indicate successful login
      } else {
        return false; // Indicate unsuccessful login
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      return false; // Indicate unsuccessful login
    }
  },

  getToken: () => {
    return localStorage.getItem('token'); // Retrieve token from localStorage
  },
  getUser: async () => {
    try {
      const token = AuthService.getToken();
      const response = await axios.get('https://restapi-ns7b.onrender.com/api/getuser', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  },

  getAllUsers: async () => {
    try {
      const token = AuthService.getToken();
      const response = await axios.get('https://restapi-ns7b.onrender.com/api/allusers', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  },
  // Other authentication-related methods...

  updateUser: async () => {
    try {
      const token = AuthService.getToken();
      const response = await axios.get('https://restapi-ns7b.onrender.com/api/updateuser', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  },
};

export default AuthService;
