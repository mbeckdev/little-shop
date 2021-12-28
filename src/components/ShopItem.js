import React from 'react';
import styles from './shopItem.module.css';

function ShopItem(props) {
  const { imgPath, altText, name, price, handleItemClick } = props;

  console.log('shopitem');
  console.log(imgPath);

  // return (
  //   <div className="shopItem" onClick={handleItemClick}>
  //     <img src={imgPath} alt={altText} />
  //     <div className="shopItemTitle">{name}</div>
  //     <div className="shopItemPrice">${price}</div>
  //   </div>
  // );
  return (
    <div className={styles.shopItem} onClick={handleItemClick}>
      <img src={imgPath} alt={altText} />
      <div className={styles.shopItemTitle}>{name}</div>
      <div className={styles.shopItemPrice}>${price}</div>
    </div>
  );
}

export default ShopItem;
