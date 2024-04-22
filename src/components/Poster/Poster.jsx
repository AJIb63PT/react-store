import React from 'react';

import styles from '../../styles/Home.module.css';

import BG from '../../images/computer.png';

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>BIG SALE 20%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the bestseller of 2024</div>
        <h1 className={styles.head}>ZIOMI rd2 with NVIDIA 5090 PRO</h1>
        <button className={styles.button}>Buy Now</button>
      </div>
      <div className={styles.image}>
        <img
          src={BG}
          alt=''
        />
      </div>
    </div>
  </section>
);

export default Poster;
