"use client";

import { useEffect, useState } from 'react';
import styles from './Loading.module.css';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHiding(true);
      // Wait for the animation to complete before unmounting
      setTimeout(() => {
        setIsVisible(false);
      }, 800); // Match the transition duration
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.loadingContainer} ${isHiding ? styles.hide : ''}`}>
      <div className={styles.loadingCircle}>
        <div className={styles.imageWrapper}>
          <img src="/A7403927.jpg" alt="Leo Morgan" className={styles.profileImage} />
        </div>
      </div>
    </div>
  );
}
