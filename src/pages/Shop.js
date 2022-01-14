import React from 'react';
import styles from './shop.module.css';
import { Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

import ShopItem from '../components/ShopItem';

import SideCart from '../components/SideCart';

import initialItems from '../initialItems';
const allItems = [...initialItems];

function Shop({
  cart,
  setCart,
  handleAddToCart,
  handleSubtractFromCart,
  handleDeleteFromCart,
  handleQtyChange,
  handleSideCart,
  handleCheckout,
}) {
  let shopItemsClassName;
  if (cart.somethingInCart) {
    shopItemsClassName = styles.shopItems;
  } else {
    shopItemsClassName = styles.shopItemsNoneInCart;
  }

  return (
    <div className={styles.shop}>
      <div className={styles.shoppingCartIconBar}>
        <div className={styles.iconContainer}>
          <div id={styles.numberInCart}>{cart.numberInCart}</div>
          <div className={styles.shoppingCartIcon}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="2x"
              className={styles.actualIcon}
            />
          </div>
        </div>
      </div>

      <div className={styles.itemsAndCartContainer}>
        <div className={styles.itemsAndTitle}>
          <h2 className={styles.pageTitle}>SHOP</h2>
          <div className={shopItemsClassName}>
            {allItems.map((item) => (
              <ShopItem
                item={item}
                key={item.id}
                imgPath={item.img}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>

        {cart.somethingInCart && (
          <SideCart
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleSubtractFromCart={handleSubtractFromCart}
            handleDeleteFromCart={handleDeleteFromCart}
            handleQtyChange={handleQtyChange}
            handleSideCart={handleSideCart}
            handleCheckout={handleCheckout}
          />
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Shop;
