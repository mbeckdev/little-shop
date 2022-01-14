import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './item.module.css';

import SideCart from '../components/SideCart';

function Item({
  cart,
  handleAddToCart,
  handleSubtractFromCart,
  handleDeleteFromCart,
  handleQtyChange,
}) {
  // const navigate = useNavigate();
  const { itemId } = useParams();
  const location = useLocation();
  const { item, imgPath } = location.state;

  return (
    <div className={styles.itemPage}>
      <img src={imgPath} alt={item.altText} />
      <div className={styles.infoContainer}>
        <h2>{itemId}</h2>

        <h2 className={styles.itemTitle}>{item.name}</h2>
        <div className={styles.itemPrice}>${item.price}</div>
        <div>button to add to cart here</div>
        <div>long description here</div>
      </div>
      {cart.somethingInCart && (
        <SideCart
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleSubtractFromCart={handleSubtractFromCart}
          handleDeleteFromCart={handleDeleteFromCart}
          handleQtyChange={handleQtyChange}
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
