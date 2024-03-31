import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Clients from './Pages/Clients';
import Contact from './Pages/Contact';
import Mining from './Pages/Mining'; 
import Geological from './Pages/Geological';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/mining" element={<Mining/>} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/services/geological" element={<Geological/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
