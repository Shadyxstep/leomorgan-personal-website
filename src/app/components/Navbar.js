"use client"; // Add this at the top

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <Link href="/">
          <img src="/home-icon.png" alt="home" />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {!isOpen && (
          <>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </>
        )}
      </div>

      <ul className={isOpen ? styles.navMenuOpen : styles.navMenu}>
        <li>
          <Link href="/newsletter">Letters</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/products">Services</Link>
        </li>
      </ul>

      {/* Overlay panel */}
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
        {/* "X" button to close the menu */}
        <button className={styles.closeButton} onClick={toggleMenu}>
          &times;
        </button>

        <ul className={styles.navMenuOverlay}>
          <li>
            <Link href="/newsletter"></Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;