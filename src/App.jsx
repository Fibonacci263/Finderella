
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
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";


// Define the Home component

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch items from the database
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/items");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading items...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <FilterBar />
      {items.length > 0 ? (
        items.map((item) => (
          <LostItemCard
            key={item._id}
            title={item.title}
            description={item.description}
            category={item.category}
            location={item.location}
            dateLost={new Date(item.date).toLocaleDateString()}
            email={item.email}
            phone={item.phone}
            imageUrl={`http://localhost:5000${item.imagePath}`}
          />
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};



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
