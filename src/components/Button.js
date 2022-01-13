import React from 'react';
import styles from './buttonPrimary.module.css';
import stylesCart from './buttonSpecial.module.css';

function Button({ buttonType, text, onTheClick }) {
  let determinedStyle = styles.btn;

  if (buttonType === 'regular') {
    determinedStyle = styles.btn;
  } else if (buttonType === 'special') {
    determinedStyle = stylesCart.btn;
  }

  return (
    <button className={determinedStyle} onClick={onTheClick}>
      {text}
    </button>
  );
}

export default Button;
