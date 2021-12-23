import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
// import App from './App';
import './App.css';
import Navbar from './Navbar';
import Shop from './pages/Shop';
import Home from './pages/Home';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          {/* <Route index element={<Navbar />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
