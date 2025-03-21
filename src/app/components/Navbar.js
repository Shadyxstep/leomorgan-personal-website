"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Spiral as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

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

  const navLinks = [
    { href: '/letters', label: 'Letters', navLabel: 'LETTERS' },
    { href: '/#about', label: 'About', navLabel: 'ABOUT' },
    { href: '/products', label: 'Products', navLabel: 'PRODUCTS' }
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/" onClick={closeMenu}>
          <img src="/home-icon.png" alt="home" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className={styles.navMenu}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className={styles.hamburgerWrapper}>
        <Hamburger 
          toggled={isOpen} 
          toggle={setIsOpen}
          size={24}
          color="#fff"
          rounded
          label="Show menu"
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
        <ul className={styles.navMenuOverlay}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMenu}>
                {link.navLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;