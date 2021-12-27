import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div id={styles.home}>
      <div id={styles.titleContainer}>
        <h1>Mini Jungle</h1>
        <p>Make it look like a jungle wherever you are</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
