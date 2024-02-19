const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const signupRoute = require('./route/signupRoute');
const loginRoute = require('./route/loginRoute');
const sacred = require('./route/sacredUserFetch');
const allusers = require('./route/allusers');
const updateRoute = require('./route/update');
const fuelRoute = require('./route/fuelpriceRoute');
const routerfuel = require('./controller/router');



//const cors = require('cors'); // Import the cors package
 dotenv.config();
const app = express();
const corsOptions = {
  origin: 'https://restapi-eta-sepia.vercel.app', // Frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/',signupRoute);
app.use('/',loginRoute);
app.use('/',sacred);
app.use('/',allusers);
app.use('/',updateRoute);
app.use('/',fuelRoute);
app.use('/',routerfuel)

const atlasURI = "mongodb+srv://tanimf1:TO6DX668hQL3WqGP@cluster0.f4va9k9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(atlasURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB Atlas:", err));;


const port = process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});

//TO6DX668hQL3WqGP