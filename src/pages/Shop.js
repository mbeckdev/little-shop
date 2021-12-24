import React from 'react';
import styles from './shop.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.shoppingCartIconBar}>
        <div className={styles.iconContainer}>
          <div id={styles.numberInCart}>23</div>
          <div className={styles.shoppingCartIcon}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="2x"
              className={styles.actualIcon}
            />
          </div>
        </div>
      </div>
      <div className={styles.shopItems}>shop items here</div>
    </div>
  );
};

export default Shop;
