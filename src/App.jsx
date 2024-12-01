// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FilterBar from "./Filterbar.jsx";
import LostItemCard from "./LostItemCard.jsx";
//import Disclaimer from "./Disclaimer.jsx";
//import Help from "./Help.jsx";
import ReportLost from "./ReportL.jsx"
import ReportFound from "./ReportF.jsx"
import Help from "./Help.jsx"
import Disclaimer from "./Disclaimer.jsx";


// Define the Home component
const Home = () => (
  <>
    <FilterBar />
    <LostItemCard
      title="Cycle Bmx"
      description="I lost the cycle from Library place. It's green in color and adult size."
      category="CYCLE"
      location="Main Library"
      dateLost="2024-12-27"
      email="johndoe@gmail.com.com"
      phone="0777456234"
      
    
    />
    <LostItemCard
      title="Mountain Bike"
      description="I lost the cycle from NC5 place. It's Blue in color and adult size."
      category="Cycle"
      location="Citadel"
      dateLost="2024-11-22"
      email="samtarly@gmail.com"
      phone="0789909865"
     
    />
    <LostItemCard
      title="Cycle Kona Brand"
      description="I lost the cycle from NC4 place. It's green in color and adult size."
      category="CYCLE"
      location="NC4"
      dateLost="2024-12-22"
      email="aegon@gmail.com"
      phone="0745377256"
      
    />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-lost" element={<ReportLost/>} />
        <Route path="/report-found" element={<ReportFound/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
        
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
