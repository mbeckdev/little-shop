import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './item.module.css';

function Item(props) {
  const navigate = useNavigate();
  const { itemId } = useParams();
  return (
    <div>
      <div>this is item page</div>
      <div>props</div>
      <h1>URL Params is : {itemId}</h1>
    </div>
  );
}

export default Item;
