import React from 'react';
import { Link } from 'react-router-dom';
import styles from './item.module.css';

function Item(props) {
  return (
    <div>
      <div>this is item page</div>
      <div>props</div>
      <Link to="ha" />
    </div>
  );
}

export default Item;
