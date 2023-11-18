const Restapi = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config').jwtSecret;
const generateToken = (user) => {
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      // Avoid including sensitive data like password in JWT payload
    };
  
    try {
      const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
      return token;
    } catch (error) {
      console.error('Error generating token:', error);
      throw error;
    }
  };
  
const signup = async (req, res, next) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const existingUser = await Restapi.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newRestapi = new Restapi({ name, email, password: hashedPassword });
    await newRestapi.save();

    const token = generateToken(newRestapi);
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
const login = async(req,res,next) =>{
  try{
    const {email,password} = req.body;
    const user = await Restapi.findOne({ email });
    if (!user) {
      // If no user is found, send an error response
      return res.status(401).json({ message: 'Invalid login credentials' });
    }
  
    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      // If passwords don't match, send an error response
      return res.status(401).json({ message: 'Invalid login credentials' });
    }
  
    // If both email and password are correct, you can send a success response
    res.status(200).json({ message: 'Login successful', user });


  }

    catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }

  };

  const sacredPage = async (req, res, next) => {
    try {
      const tok = req.headers.authorization;
  
      if (!tok) {
        return res.status(401).json({ msg: 'Unauthorized: No token provided' });
      }
  
      console.log('Received token:', tok);
  
      const token = tok.split(" ")[1];
      const decode = jwt.verify(token, jwtSecret);
  
      console.log('Decoded token:', decode);
  
      const id = decode.id;
  
      console.log('Decoded user ID:', id);
  
      const user = await Restapi.findById(id);
  
      console.log('Retrieved user:', user);
      res.status(200).json({msg:"authorized user"});
  
      req.user = user;
      next();
    } catch (err) {
      console.error('Error in sacredPage middleware:', err);
      res.status(500).json({ msg: 'Server error' });
    }
  };
  

module.exports = {
  signup,
  login,
  sacredPage,
};