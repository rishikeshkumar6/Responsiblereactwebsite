import React from 'react';
import styles from './Drawer.module.css';

export function Drawer() {
  return (
    <div className={styles.drawer}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="/">Home</a>
        </li>
        <li className={styles.menuItem}>
          <a href="/about">About</a>
        </li>
        <li className={styles.menuItem}>
          <a href="/contact">Contact</a>
        </li>
        <li className={styles.menuItem}>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </div>
  );
}

export default Drawer;
