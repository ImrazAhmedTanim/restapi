import React from 'react';
import Signup from './component/Signup'; 
import Login from './component/Login';
import Allusers from './component/Allusers';
import NavBar from './component/NavBar';
import LandingPage from './component/LandingPage';
import FuelPriceCalendar from './component/FuelPriceCalender';
import AuthInfo from './component//AuthContext';
import GoldPrice from './component/GoldPrice';
import GetUser from './component/GetUser';
import UpdateUser from './component/UpdateUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Router>
      <>
      <AuthInfo>
      <NavBar />
      
      <Routes>
  
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Login />} />
      <Route path="/allusers" element={<Allusers />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/fuelpricecalender" element={<FuelPriceCalendar />} />
      <Route path="/goldpricecalender" element={<GoldPrice />} />
      <Route path="/getuser" element={<GetUser />} />
      <Route path="/updateuser" element={<UpdateUser />} />




     


      </Routes>
      </AuthInfo>
    
    </>
    </Router>
    </div>
  );
}

export default App;
