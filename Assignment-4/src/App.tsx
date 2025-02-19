// import React from "react";
import { Routes, Route } from "react-router-dom";    
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/footer";
import About from "./components/About";
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
          <Route path="/about" element = {<About />}></Route>
          <Route path="/services" element={<Services />} />
        </Routes> 
      <Footer />
      </>
  );
}

export default App;