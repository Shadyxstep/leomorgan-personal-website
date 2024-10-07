"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Spiral as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when the overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" onClick={closeMenu}>
          <img src="/home-icon.png" alt="home" />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburgerWrapper}>
        <Hamburger toggled={isOpen} toggle={setIsOpen}/>
      </div>

      <ul className={isOpen ? styles.navMenuOpen : styles.navMenu}>
        <li>
          <Link href="/letters" onClick={closeMenu}>Letters</Link>
        </li>
        <li>
          <Link href="/#about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link href="/products" onClick={closeMenu}>Products</Link>
        </li>
      </ul>

      {/* Overlay panel */}
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
        <ul className={styles.navMenuOverlay}>
          <li>
            <Link href="/letters" onClick={closeMenu}>Letters</Link>
          </li>
          <li>
            <Link href="/#about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link href="/products" onClick={closeMenu}>Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;