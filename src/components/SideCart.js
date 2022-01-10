import React from 'react';
import styles from './sideCart.module.css';

function SideCart({ cart }) {
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
                <button>-</button>
                <div className={styles.inputContainer}>
                  <input type="text" />
                </div>
                <button>+</button>
              </div>
              <button>Delete</button>
            </div>
            {/* <button
              className="btn"
              onClick={(e) => {
                handleAddToCart(e, item);
              }}
            >
              <button className="btn" onClick={handleAddToCart}>
              Add to Cart
            </button> */}
          </div>
        ))}
      </div>
      <div>Total Here</div>
      <div>Checkout button here</div>
    </div>
  );
}

export default SideCart;
