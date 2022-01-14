import React from 'react';
import styles from './sideCart.module.css';

import Button from './Button';

function SideCart({
  cart,
  handleAddToCart,
  handleSubtractFromCart,
  handleDeleteFromCart,
  handleQtyChange,
  handleCheckout,
}) {
  console.log(cart);
  return (
    <div className={styles.sideCart}>
      <h2>CART</h2>

      <div className={styles.sideCartItemContainer}>
        {cart.items.map((itemInCart) => (
          <div key={itemInCart.id} className={styles.sideCartItem}>
            <div className={styles.sideCartSectionA}>
              <img src={itemInCart.img} alt={itemInCart.altText} />
              {/* <img src={imgPath} alt={item.altText} /> */}
              <div className={styles.sideCartSectionA_A}>
                <div className={styles.shopItemTitle}>{itemInCart.name}</div>
                <div className={styles.shopItemPrice}>${itemInCart.price}</div>
              </div>
            </div>
            <div className={styles.sideCartSectionB}>
              <div className={styles.sideCartSectionB_qtyContainer}>
                <Button
                  text="-"
                  buttonType="primaryPlusOrMinus"
                  onTheClick={(e) => {
                    handleSubtractFromCart(e, itemInCart);
                  }}
                />

                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={itemInCart.qty}
                    onChange={(e) => {
                      handleQtyChange(e, itemInCart);
                    }}
                  />
                </div>

                <Button
                  text="+"
                  buttonType="primaryPlusOrMinus"
                  onTheClick={(e) => {
                    handleAddToCart(e, itemInCart);
                  }}
                />
              </div>

              <Button
                text="Delete"
                buttonType="primary"
                onTheClick={(e) => {
                  handleDeleteFromCart(e, itemInCart);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.subTotalContainer}>
        <div className={styles.subTotal}>Subtotal</div>
        <div className={styles.subTotalPrice}>${cart.total.toFixed(2)}</div>
      </div>

      <Button
        text="Checkout"
        buttonType="special"
        onTheClick={handleCheckout}
      />
    </div>
  );
}

export default SideCart;
