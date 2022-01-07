import React from 'react';
import styles from './shop.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

import pic1 from '../assets/items/plant1.jpg';
import pic2 from '../assets/items/plant2.jpg';
import pic3 from '../assets/items/plant3.jpg';
import pic4 from '../assets/items/plant4.jpg';
import pic5 from '../assets/items/plant5.jpg';
import pic6 from '../assets/items/plant6.jpg';
import pic7 from '../assets/items/plant7.jpg';
import pic8 from '../assets/items/plant8.jpg';

import ShopItem from '../components/ShopItem';
import uniqid from 'uniqid';

function Shop() {
  // const itemPics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  const allItems = [
    {
      name: 'plant1',
      img: pic1,
      price: 19.99,
      altText: 'picture of a plant',
      id: uniqid(),
    },
    {
      name: 'plant2',
      img: pic2,
      price: 19.99,
      altText: 'picture of a plant',
      id: uniqid(),
    },
    {
      name: 'plant3',
      img: pic3,
      price: 19.99,
      altText: 'picture of a plant',
      id: uniqid(),
    },
    {
      name: 'plant4',
      img: pic4,
      price: 29.99,
      altText: 'picture of a plant',
      id: uniqid(),
    },
    {
      name: 'plant5',
      img: pic5,
      price: 19.99,
      altText: 'picture of a plant',
      id: uniqid(),
    },
    {
      name: 'plant6',
      img: pic6,
      price: 19.99,
      altText: 'picture of a plant',
      id: uniqid(),
    },
    {
      name: 'plant7',
      img: pic7,
      price: 19.99,
      altText: 'picture of a plant',
      id: uniqid(),
    },
    {
      name: 'plant8',
      img: pic8,
      price: 19.99,
      altText: 'picture of a plant',
      id: uniqid(),
    },
  ];

  const handleItemClick = (e, thisItem) => {
    e.preventDefault();
    console.log('handle item click', thisItem);
    // <Link to="/home">
    //   <li>Shop</li>
    // </Link>;
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log('Add to cart clicked from shopitem');
  };

  return (
    <div className={styles.shop}>
      <div className={styles.shoppingCartIconBar}>
        <div className={styles.iconContainer}>
          <div id={styles.numberInCart}>23</div>
          <div className={styles.shoppingCartIcon}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="2x"
              className={styles.actualIcon}
            />
          </div>
        </div>
      </div>

      <div className={styles.itemsAndCartContainer}>
        <div className={styles.itemsAndTitle}>
          <h2 className={styles.pageTitle}>SHOP</h2>
          <div className={styles.shopItems}>
            {allItems.map((item) => (
              <ShopItem
                item={item}
                imgPath={item.img}
                handleItemClick={handleItemClick}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        {true} && <div>cart hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div>}
      </div>
      <Outlet />
    </div>
  );
}

export default Shop;

{
  /* <ShopItem
              item={item}
              key={item.id}
              imgPath={item.img}
              handleItemClick={handleItemClick}
            /> */
}

{
  /* <Link to="/home" key={item.id}> */
}
{
  /* </Link> */
}
