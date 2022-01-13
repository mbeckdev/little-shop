import React from 'react';
import styles from './button.module.css';

function Button({ buttonType, text, onTheClick }) {
  let determinedStyle = styles.btn;

  if (buttonType === 'primary') {
    determinedStyle = styles.btn;
  } else if (buttonType === 'special') {
    determinedStyle = styles.btnSpecial;
  } else if (buttonType === 'primaryPlusOrMinus') {
    determinedStyle = styles.btnPlusOrMinus;
  }

  return (
    <button className={determinedStyle} onClick={onTheClick}>
      {text}
    </button>
  );
}

export default Button;
