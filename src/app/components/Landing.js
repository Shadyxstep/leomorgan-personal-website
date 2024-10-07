"use client";

import styles from "./Landing.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {

  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); 
        }
      },
      {
        threshold: 0.2, 
      }
    );

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }
    if (rightSectionRef.current) {
      observer.observe(rightSectionRef.current);
    }

    return () => {
      if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
      if (rightSectionRef.current) observer.unobserve(rightSectionRef.current);
    };
  }, []);

 return (
    <section className={styles.heroSection}>
      <div
        className={`${styles.contentLeft} ${
          isVisible ? styles.fadeIn : ""
        }`}
        ref={leftSectionRef}
      >
        <h1 className={styles.title}>Leo Morgan</h1>
        <h2 className={styles.subtitle}>Train. Learn. Create.</h2>
        <p className={styles.subText}>
          I&apos;m passionate about athletic performance, creativity, and personal growth. I share
          solutions and strategies I&apos;ve personally used to overcome challenges in these
          areas. If any of these topics interest you, I write about practical insights to problems I&apos;ve solved in these domains. Best of all, they&apos;re sent straight to your inbox, free of charge. 
          <br></br> Sign up here ↓
        </p>
        <div className={styles.formWrapper}>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.ctaButton}>
              Read For Free
            </button>
          </form>
        </div>
      </div>
      <div
        className={`${styles.contentRight} ${
          isVisible ? styles.fadeIn : ""
        }`} // Apply fade-in class dynamically
        ref={rightSectionRef}
      >
        <div className={styles.imageWrapper}>
          <Image 
            src={"/heroimgmin.png"} 
            alt="Leo Morgan" 
            height={300} 
            width={300}
            className={styles.profileImage} 
          />
        </div>
      </div>
    </section>
  );
}
