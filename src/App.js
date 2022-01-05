import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';

import React from 'react';
// import App from './App';
// import './App.css';
import Navbar from './Navbar';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Item from './pages/Item';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <Routes>
          {/* <Route index element={<Navbar />} /> */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:itemId" element={<Item />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
