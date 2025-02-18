import React from "react";
import { Routes, Route } from "react-router-dom";    
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Services from "./components/Services";

// , Route, Routes, Link

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes> 
      
      </>
  );
}

export default App;