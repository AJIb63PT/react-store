import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Footer.module.css';
import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <img
          src={LOGO}
          alt='Store'
        />
      </Link>
    </div>

    <div className={styles.rights}>
      Developed by{' '}
      <a
        href='https://github.com/AJIb63PT'
        target='_blank'
        rel='noreferrer'
      >
        Albert Khalimov
      </a>
    </div>
  </section>
);

export default Footer;
