import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Aboutus from './pages/Aboutus'
import Programs from './pages/Programs'
import Gallary from './pages/Gallary'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className = "page-container">
        <Routes>
            <Route path ="/" element={<Homepage />} />
            <Route path ="/Aboutus" element={<Aboutus />} />
            <Route path ="/Programs" element={<Programs />} />
            <Route path = "/Gallary" element ={<Gallary />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
