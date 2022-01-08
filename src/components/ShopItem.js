import React from 'react';
import styles from './shopItem.module.css';
import { Link, useParams, NavLink } from 'react-router-dom';

function ShopItem(props) {
  const { item, imgPath, handleAddToCart } = props;

  // console.log('shopitem', item);
  // console.log(imgPath);

  const { itemId } = useParams();

  return (
    <NavLink
      key={item.id}
      to={`/shop/${item.name}`}
      state={{
        item: item,
        imgPath: imgPath,
      }}
    >
      <div
        className={(styles.shopItem, 'shopItem')}
        // onClick={(e) => {
        //   handleItemClick(e, item);
        // }}
      >
        <div className={styles.shopItemContainer}>
          <img src={imgPath} alt={item.altText} />
          <div className={styles.shopItemTitle}>{item.name}</div>
          <div className={styles.shopItemPrice}>${item.price}</div>
          <button
            className="btn"
            onClick={(e) => {
              handleAddToCart(e, item);
            }}
          >
            {/* <button className="btn" onClick={handleAddToCart}> */}
            Add to Cart
          </button>
        </div>
      </div>
    </NavLink>
  );
}

export default ShopItem;

{
  /* <Link to="/item">
          <div className={styles.shopItemContainer}>
            <img src={imgPath} alt={item.altText} />
            <div className={styles.shopItemTitle}>{item.name}</div>
            <div className={styles.shopItemPrice}>${item.price}</div>
          </div>
        </Link> */
}
