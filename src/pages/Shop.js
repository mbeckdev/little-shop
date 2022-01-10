import React, { useState, useEffect } from 'react';
import styles from './shop.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

import ShopItem from '../components/ShopItem';

import SideCart from '../components/SideCart';

import initialItems from '../initialItems';
const allItems = [...initialItems];
// const allItems = [
//   {
//     name: 'plant1',
//     img: pic1,
//     price: 19.99,
//     altText: 'picture of a plant',
//     id: uniqid(),
//     qty: 0,
//   },
//   {
//     name: 'plant2',
//     img: pic2,
//     price: 19.99,
//     altText: 'picture of a plant',
//     id: uniqid(),
//     qty: 0,
//   },
//   {
//     name: 'plant3',
//     img: pic3,
//     price: 19.99,
//     altText: 'picture of a plant',
//     id: uniqid(),
//     qty: 0,
//   },
//   {
//     name: 'plant4',
//     img: pic4,
//     price: 29.99,
//     altText: 'picture of a plant',
//     id: uniqid(),
//     qty: 0,
//   },
//   {
//     name: 'plant5',
//     img: pic5,
//     price: 19.99,
//     altText: 'picture of a plant',
//     id: uniqid(),
//     qty: 0,
//   },
//   {
//     name: 'plant6',
//     img: pic6,
//     price: 19.99,
//     altText: 'picture of a plant',
//     id: uniqid(),
//     qty: 0,
//   },
//   {
//     name: 'plant7',
//     img: pic7,
//     price: 19.99,
//     altText: 'picture of a plant',
//     id: uniqid(),
//     qty: 0,
//   },
//   {
//     name: 'plant8',
//     img: pic8,
//     price: 19.99,
//     altText: 'picture of a plant',
//     id: uniqid(),
//     qty: 0,
//   },
// ];

function Shop() {
  // const itemPics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  for (let k = 0; k < allItems.length; k++) {
    console.log(allItems[k].id);
  }

  const handleItemClick = (e, thisItem) => {
    e.preventDefault();
    console.log('handle item click', thisItem);
    // <Link to="/home">
    //   <li>Shop</li>
    // </Link>;
  };

  const handleAddToCart = (e, clickedItem) => {
    e.preventDefault();
    console.log('Add to cart clicked from shopitem');

    let tempCart = {
      numberInCart: cart.numberInCart,
      somethingInCart: cart.somethingInCart,
      total: cart.total,
      items: [...cart.items],
    };

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
      if (tempCart.items[i].id == clickedItem.id) {
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

    tempCart.total = tempCart.total + clickedItem.price;

    tempCart.items = tempItems;

    setCart(tempCart);
  };

  const [cart, setCart] = useState({
    numberInCart: 0,
    somethingInCart: false,
    total: 0,

    items: [],
  });
  //   {
  //     name: 'plant1',
  //     img: allItems[0].img,
  //     price: 19.99,
  //     altText: 'picture of a plant',
  //     id: allItems[0].id,
  //     qty: 0,
  //   },
  //   {
  //     name: 'plant2',
  //     img: allItems[1].img,
  //     price: 19.99,
  //     altText: 'picture of a plant',
  //     id: allItems[1].id,
  //     qty: 0,
  //   },
  // ],

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
                handleItemClick={handleItemClick}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>

        {cart.somethingInCart && (
          <SideCart cart={cart} handleAddToCart={handleAddToCart} />
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Shop;

{
  /* <ShopItem
              item={item}
              key={item.id}
              imgPath={item.img}
              handleItemClick={handleItemClick}
            /> */
}

{
  /* <Link to="/home" key={item.id}> */
}
{
  /* </Link> */
}
