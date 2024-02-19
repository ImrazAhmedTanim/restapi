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
    const { name, email, password, confirmPassword,agreedToTerms } = req.body;
    console.log('Received signup request:', req.body);

    if (password !== confirmPassword) {
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
     res.status(200).json({message:"login successful",token});
}
 catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
  
};
const login = async(req,res,next) =>{
  try{
    const {email,password} = req.body;
    const user = await Restapi.findOne({ email });
    console.log(user);
    if (!user) {
      // If no user is found, send an error response
      return res.status(400).json({ message: 'Invalid login credentials' });
    }
  
    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      // If passwords don't match, send an error response
      return res.status(400).json({ message: 'Invalid login credentials' });
    }else{
    const token = generateToken(user);
    return res.status(200).json({ message: 'User logged in successfully', token });
    }
    // If both email and password are correct, you can send a success response
    //res.status(200).json({ message: 'Login successful', user });

 
  }

    catch (error) {
      console.error('Error during user login:', error);
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
  
      req.id = user.id;
      next();
    } catch (err) {
      console.error('Error in sacredPage middleware:', err);
      res.status(500).json({ msg: 'Server error' });
    }
  };
   
  const allUser = async (req, res, next) => {
    try {
      const tok = req.headers.authorization;
  
      if (!tok) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
      }
  
      const token = tok.split(" ")[1];
      const decode = jwt.verify(token, jwtSecret);
  
      const id = decode.id;
  
      const allusers12 = await Restapi.find().limit(60); // Adjust the limit as needed
  
      // Send the list of users in the response
      res.status(200).json({ users: allusers12 });
    } catch (err) {
      res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };
  
  const updateUser = async (req, res, next) => {
    try {
      const tok = req.headers.authorization;
  
      if (!tok) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
      }
  
      const token = tok.split(" ")[1];
      const decode = jwt.verify(token, jwtSecret);
  
      const id = decode.id;
  
      const singularUser = await Restapi.findById(id); // Adjust the limit as needed
  
      // Send the list of users in the response
      res.status(200).json({ user: singularUser });
    } catch (err) {
      res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };
 
   const updateUserFinal = async(req,res,next)=>{
    try {
      const updatedItem = await Restapi.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json(updatedItem);
    } catch (error) {
      console.error('Error updating item:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
   
module.exports = {
  signup,
  login,
  sacredPage,
  allUser,
  updateUser,
  updateUserFinal
};