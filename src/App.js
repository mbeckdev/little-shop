import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';

import React, { useState, useEffect } from 'react';
// import App from './App';
// import './App.css';
import Navbar from './Navbar';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Item from './pages/Item';

const App = () => {
  const [cart, setCart] = useState({
    numberInCart: 0,
    somethingInCart: false,
    total: 0,

    items: [],
  });
  useEffect(() => {
    console.log('cart updated');
  }, [cart]);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <Routes>
          {/* <Route index element={<Navbar />} /> */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route
            path="/shop"
            element={<Shop cart={cart} setCart={setCart} />}
          />
          <Route path="/shop/:itemId" element={<Item />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
