import React from 'react';
import styles from './sideCart.module.css';

function SideCart({
  cart,
  handleAddToCart,
  handleSubtractFromCart,
  handleDeleteFromCart,
  handleQtyChange,
}) {
  console.log(cart);
  return (
    <div className={styles.sideCart}>
      <h2>CART</h2>

      <div className={styles.sideCartItemContainer}>
        {cart.items.map((itemInCart) => (
          <div key={itemInCart.id} className={styles.sideCartItem}>
            qty {itemInCart.qty} id: {itemInCart.id}
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
                <button
                  onClick={(e) => {
                    handleSubtractFromCart(e, itemInCart);
                  }}
                >
                  -
                </button>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={itemInCart.qty}
                    onChange={(e) => {
                      handleQtyChange(e, itemInCart);
                    }}
                  />
                </div>
                <button
                  onClick={(e) => {
                    handleAddToCart(e, itemInCart);
                  }}
                >
                  +
                </button>
              </div>
              <button
                onClick={(e) => {
                  handleDeleteFromCart(e, itemInCart);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>Total ${cart.total.toFixed(2)}</div>
      <button>Checkout</button>
    </div>
  );
}

export default SideCart;
