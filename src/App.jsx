import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Mining from './Pages/Mining'; 
import Geological from './Pages/Geological';
import NotFound from './Pages/NotFound';
import {  HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/mining" element={<Mining/>} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/services/geological" element={<Geological/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
