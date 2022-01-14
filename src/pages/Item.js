import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './item.module.css';

import SideCart from '../components/SideCart';
import Button from '../components/Button';

function Item({
  cart,
  handleAddToCart,
  handleSubtractFromCart,
  handleDeleteFromCart,
  handleQtyChange,
  handleCheckout,
}) {
  // const navigate = useNavigate();
  const { itemId } = useParams();
  const location = useLocation();
  const { item, imgPath } = location.state;

  return (
    <div className={styles.itemPage}>
      <div className={styles.imgAndInfo}>
        <div className={styles.imgContainer}>
          <img src={imgPath} alt={item.altText} />
        </div>
        <div className={styles.infoContainer}>
          <h2 className={itemId}>{item.name}</h2>
          <div className={styles.itemPrice}>${item.price}</div>
          <div>
            <Button
              buttonType="special"
              text="Add to Cart"
              onTheClick={(e) => {
                handleAddToCart(e, item);
              }}
            />
          </div>
          <div className={styles.description}>{item.description}</div>
        </div>
      </div>
      {cart.somethingInCart && (
        <SideCart
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleSubtractFromCart={handleSubtractFromCart}
          handleDeleteFromCart={handleDeleteFromCart}
          handleQtyChange={handleQtyChange}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
}

export default Item;

//<div className={(styles.item, 'item')}>
//       <div className={styles.itemContainerRow}>
//         <div className={styles.itemContainer}>
//           <img src={imgPath} alt={item.altText} />
//            <div className={styles.itemTitle}>{item.name}</div>
//            <div className={styles.itemPrice}>${item.price}</div>
//          </div>
//        </div>
//      </div>
