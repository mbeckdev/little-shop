import React from 'react';
import styles from './shop.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.shoppingCartIconBar}>
        <div>shopping cart icon</div>

        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      <div>shop items here</div>
    </div>
  );
};

export default Shop;
