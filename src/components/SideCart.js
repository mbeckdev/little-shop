import React from 'react';
import styles from './sideCart.module.css';

function SideCart({ cart }) {
  console.log(cart);
  return (
    <div className={styles.sideCart}>
      <h2>CART</h2>

      <div className={styles.sideCartItemContainer}>
        {cart.items.map((itemInCart) => (
          <div key={itemInCart.id}>
            qty {itemInCart.qty} id: {itemInCart.id}
          </div>
        ))}
      </div>
      <div>Total Here</div>
      <div>Checkout button here</div>
    </div>
  );
}

export default SideCart;
