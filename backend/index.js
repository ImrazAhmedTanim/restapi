const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const signupRoute = require('./route/signupRoute');
const loginRoute = require('./route/loginRoute');
const sacred = require('./route/sacredUserFetch');

//const cors = require('cors'); // Import the cors package
 dotenv.config();
const app = express();
app.use(express.json());
app.use('/',signupRoute);
app.use('/',loginRoute);
app.use('/',sacred);
const atlasURI = "mongodb://localhost:27017";

mongoose.connect(atlasURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB Atlas:", err));;


const port = process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});