import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <h1 className={styles.headerLogo}>Mini Jungle</h1>
      <ul className={styles.navLinks}>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
