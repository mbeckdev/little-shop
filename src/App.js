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

  const handleAddToCart = (e, clickedItem) => {
    e.preventDefault();
    console.log('Add to cart clicked from shopitem');

    let tempCart = _getCartBeforeChange();

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

  const handleDeleteFromCart = (e, clickedItem) => {
    let tempCart = _getCartBeforeChange();

    // take out item from items array
    let tempCartWithoutItems = deleteFromCart(clickedItem);

    // total price
    let tempTotal = tempCart.total - clickedItem.price * clickedItem.qty;
    tempCart.total = Number(tempTotal.toFixed(2));

    // number in cart
    if (tempCart.numberInCart > 0) {
      tempCart.numberInCart = tempCart.numberInCart - clickedItem.qty;
    }

    if (tempCart.numberInCart <= 0) {
      tempCart.somethingInCart = false;
    }

    console.log(tempCart);

    tempCart.items = tempCartWithoutItems.items;
    console.log(tempCart);
    setCart(tempCart);
  };

  function deleteFromCart(itemToDelete) {
    let tempCart = _getCartBeforeChange();

    for (let i = 0; i < cart.items.length; i++) {
      if (tempCart.items[i].id === itemToDelete.id) {
        tempCart.items.splice(i, 1);

        return tempCart;
      }
    }
  }

  const handleSubtractFromCart = (e, clickedItem) => {
    let tempCart = _getCartBeforeChange();

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

  function _getCartBeforeChange() {
    let tempCart = {
      numberInCart: cart.numberInCart,
      somethingInCart: cart.somethingInCart,
      total: cart.total,
      items: [...cart.items],
    };
    return tempCart;
  }

  const handleQtyChange = (e, itemToChange) => {
    let tempCart = _getCartBeforeChange();
    let itemIndex = _getThisItemIndex(tempCart, itemToChange);

    //it's a positive number and is not .
    if (Number(e.target.value) && e.target.value !== '.') {
      tempCart.items[itemIndex].qty = Number(e.target.value);
      tempCart.numberInCart = _findNumberInCartFromItems(tempCart.items);
      tempCart.somethingInCart = _findSomethingInCartFromItems(tempCart.items);
      tempCart.total = _findTotalInCartFromItems(tempCart.items);
      setCart(tempCart);
    } else if (e.target.value === '0' || e.target.value === '') {
      handleDeleteFromCart(e, itemToChange);
    }
  };

  const handleCheckout = (e) => {
    // e.preventDefault();
    alert(
      "Oh no! Checkout isn't part of this project, \r but if it did exist it would be here."
    );
  };

  function _findNumberInCartFromItems(cartItems) {
    let numberInCart = 0;
    for (let i = 0; i < cartItems.length; i++) {
      //check qty, add to number
      numberInCart += cartItems[i].qty;
    }
    return numberInCart;
  }

  function _findSomethingInCartFromItems(cartItems) {
    if (cartItems.length <= 0) {
      return false;
    }
    return true;
  }

  function _findTotalInCartFromItems(cartItems) {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      //check qty, add to number
      total += cartItems[i].price * cartItems[i].qty;
    }
    return total;
  }

  function _getThisItemIndex(theCart, theItem) {
    for (let index = 0; index < theCart.items.length; index++) {
      if (theCart.items[index].id === theItem.id) {
        return index;
      }
    }
    return -1;
  }

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
            element={
              <Shop
                cart={cart}
                setCart={setCart}
                handleAddToCart={handleAddToCart}
                handleSubtractFromCart={handleSubtractFromCart}
                handleDeleteFromCart={handleDeleteFromCart}
                handleQtyChange={handleQtyChange}
                handleCheckout={handleCheckout}
              />
            }
          />
          <Route
            path="/shop/:itemId"
            element={
              <Item
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleSubtractFromCart={handleSubtractFromCart}
                handleDeleteFromCart={handleDeleteFromCart}
                handleQtyChange={handleQtyChange}
                handleCheckout={handleCheckout}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
