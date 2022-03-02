import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <h1 className={styles.headerLogo}>
        <Link to="/little-shop/">Mini Jungle</Link>
      </h1>
      <ul className={styles.navLinks}>
        <Link to="/little-shop/">
          <li>Home</li>
        </Link>
        <Link to="/little-shop/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
