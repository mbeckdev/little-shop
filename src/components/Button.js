import React from 'react';
import styles from './button.module.css';
import { Link } from 'react-router-dom';

function Button({ buttonType, text, onTheClick, isLink = false }) {
  let determinedStyle = styles.btn;

  if (buttonType === 'primary') {
    determinedStyle = styles.btn;
  } else if (buttonType === 'special') {
    determinedStyle = styles.btnSpecial;
  } else if (buttonType === 'primaryPlusOrMinus') {
    determinedStyle = styles.btnPlusOrMinus;
  }

  let returnAButton = (
    <button className={determinedStyle} onClick={onTheClick}>
      {text}
    </button>
  );

  let returnALink = (
    <Link to="/shop">
      <button className={determinedStyle} onClick={onTheClick}>
        {text}
      </button>
    </Link>
  );

  let thingToReturn;

  !isLink ? (thingToReturn = returnAButton) : (thingToReturn = returnALink);

  return thingToReturn;
}

export default Button;
