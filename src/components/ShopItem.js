import React from 'react';
import styles from './shopItem.module.css';
import { Link, useParams } from 'react-router-dom';

function ShopItem(props) {
  const { item, imgPath, handleItemClick } = props;

  // console.log('shopitem', item);
  // console.log(imgPath);

  const { itemId } = useParams();

  return (
    <div
      className={styles.shopItem}
      onClick={(e) => {
        handleItemClick(e, item);
      }}
    >
      <Link to="/item">
        <div className={styles.shopItemContainer}>
          <img src={imgPath} alt={item.altText} />
          <div className={styles.shopItemTitle}>{item.name}</div>
          <div className={styles.shopItemPrice}>${item.price}</div>
        </div>
      </Link>
    </div>
  );
}

export default ShopItem;
