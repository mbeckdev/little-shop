import React, { useState, useEffect } from 'react';
import styles from './shop.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

import ShopItem from '../components/ShopItem';

import SideCart from '../components/SideCart';

import initialItems from '../initialItems';
const allItems = [...initialItems];

function Shop() {
  for (let k = 0; k < allItems.length; k++) {
    console.log(allItems[k].id);
  }

  const handleAddToCart = (e, clickedItem) => {
    e.preventDefault();
    console.log('Add to cart clicked from shopitem');

    let tempCart = getCartBeforeChange();

    // update numberInCart
    tempCart.numberInCart = cart.numberInCart + 1;

    // update somethingInCart
    tempCart.numberInCart > 0
      ? (tempCart.somethingInCart = true)
      : (tempCart.somethingInCart = false);

    // update items
    let tempItems = [...cart.items];

    console.log('clickedItem', clickedItem);
    console.log('tempItems', tempItems);

    // make items smaller and add qties to them
    console.log('dur', clickedItem.qty);
    // if clicked item is already in the cart, dont add it, just increment qty
    // is clicked item already in cart?

    // for each entry of items
    let isItemAlreadyInCart = false;
    for (let i = 0; i < cart.items.length; i++) {
      if (tempCart.items[i].id === clickedItem.id) {
        console.log('exists already');
        isItemAlreadyInCart = true;
        tempCart.items[i].qty = tempCart.items[i].qty + 1;
      }
    }
    if (!isItemAlreadyInCart) {
      let tempClickedItem = clickedItem;
      tempClickedItem.qty = 1;
      tempItems = [...tempItems, tempClickedItem];
    }

    let tempTotal = tempCart.total + clickedItem.price;
    tempCart.total = Number(tempTotal.toFixed(2));

    tempCart.items = tempItems;

    setCart(tempCart);
  };

  function deleteFromCart(itemToDelete) {
    let tempCart = getCartBeforeChange();

    for (let i = 0; i < cart.items.length; i++) {
      if (tempCart.items[i].id === itemToDelete.id) {
        tempCart.items.splice(i, 1);

        return tempCart;
      }
    }
  }

  const handleSubtractFromCart = (e, clickedItem) => {
    let tempCart = getCartBeforeChange();

    // find which item you clicked, change qty 1 lower or delete item.

    if (clickedItem.qty <= 1) {
      // delete item... tbd
      tempCart = deleteFromCart(clickedItem);
    } else {
      // decrement qty

      // find this item in tempCart
      for (let i = 0; i < cart.items.length; i++) {
        if (tempCart.items[i].id === clickedItem.id) {
          tempCart.items[i].qty = tempCart.items[i].qty - 1;
        }
      }
    }

    // total price
    let tempTotal = tempCart.total - clickedItem.price;
    tempCart.total = Number(tempTotal.toFixed(2));

    // number in cart
    if (tempCart.numberInCart > 0) {
      tempCart.numberInCart = tempCart.numberInCart - 1;
    }

    if (tempCart.numberInCart <= 0) {
      tempCart.somethingInCart = false;
    }

    setCart(tempCart);
  };

  function getCartBeforeChange() {
    let tempCart = {
      numberInCart: cart.numberInCart,
      somethingInCart: cart.somethingInCart,
      total: cart.total,
      items: [...cart.items],
    };
    return tempCart;
  }

  const [cart, setCart] = useState({
    numberInCart: 0,
    somethingInCart: false,
    total: 0,

    items: [],
  });

  useEffect(() => {
    console.log('cart updated');
  }, [cart]);

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
          />
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Shop;
