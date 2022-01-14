import React from 'react';
import styles from './shopItem.module.css';
import { NavLink } from 'react-router-dom';
import Button from './Button';

function ShopItem(props) {
  const { item, imgPath, handleAddToCart } = props;

  return (
    <NavLink
      key={item.id}
      to={`/shop/${item.name}`}
      state={{
        item: item,
        imgPath: imgPath,
      }}
    >
      <div className={(styles.shopItem, 'shopItem')}>
        <div className={styles.shopItemContainer}>
          <img src={imgPath} alt={item.altText} loading="lazy" />
          <div className={styles.shopItemTitle}>{item.name}</div>
          <div className={styles.shopItemPrice}>${item.price}</div>

          <Button
            buttonType="special"
            text="Add to Cart"
            onTheClick={(e) => {
              handleAddToCart(e, item);
            }}
          />
        </div>
      </div>
    </NavLink>
  );
}

export default ShopItem;
