import React from 'react';

import Button from '../components/Button';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.titleContainer}>
        <h2 className={styles.mainTitle}>Mini Jungle</h2>
        <p>Make it look like a jungle wherever you are</p>

        <Button text="Shop Now" buttonType="special" isLink={true} />
      </div>
    </div>
  );
};

export default Home;
