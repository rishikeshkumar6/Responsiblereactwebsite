import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {DiApple} from 'react-icons/di'
import styles from './style.module.css';
import {Drawer} from './drawer.js'
export function Header() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className={styles.parent}>
        <header className={styles.header}>
      <div className={styles.logo}>
        <DiApple />
      </div>
      <nav className={styles.nav}>
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
        <div className={styles.menuIcon} onClick={toggleDrawer}>
          <FaBars />
        </div>
      </nav>
      {showDrawer && <Drawer />}
    </header>

    <div className={styles.container}>
    <div className={styles.hero}>
        <h3>Be There</h3>
        <p>Hii there this is my first module.css project i hope my project is good</p>
        <button className={styles.btn1}>See How</button>
    </div>
    <div>
        <img src="https://wallpapers.com/images/hd/hd-vacation-house-in-the-beach-j4jasqgcc5ismew8.webp" className={styles.image}/>
    </div>
    </div>
    </div>
    
  );
}


