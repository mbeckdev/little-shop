import React from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import styles from './item.module.css';

function Item(props) {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const location = useLocation();
  const { item, imgPath } = location.state;

  return (
    <div className="itemPage">
      <div>this is item page</div>
      <div>props</div>
      <h1>URL Params is : {itemId}</h1>

      <h4>item = {item.name}</h4>

      <div className={(styles.item, 'item')}>
        <div className={styles.itemContainerRow}>
          <div className={styles.itemContainer}>
            <img src={imgPath} alt={item.altText} />
            <div className={styles.itemTitle}>{item.name}</div>
            <div className={styles.itemPrice}>${item.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
