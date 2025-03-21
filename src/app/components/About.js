"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
  const imageRef = useRef(null); 
  const textRef = useRef(null);  
  const headerRef = useRef(null); 
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false); 

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerImage = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsImageVisible(true);
        observerImage.unobserve(imageRef.current); 
      }
    }, options);

    const observerText = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsTextVisible(true);
        observerText.unobserve(textRef.current);
      }
    }, options);

    const observerHeader = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsHeaderVisible(true);
        observerHeader.unobserve(headerRef.current);
      }
    }, options);

    if (imageRef.current) {
      observerImage.observe(imageRef.current);
    }
    if (textRef.current) {
      observerText.observe(textRef.current);
    }
    if (headerRef.current) {
      observerHeader.observe(headerRef.current);
    }

    return () => {
      if (imageRef.current) observerImage.unobserve(imageRef.current);
      if (textRef.current) observerText.unobserve(textRef.current);
      if (headerRef.current) observerHeader.unobserve(headerRef.current);
    };
  }, []);

  return (
    <section id="about" className={styles.aboutSection}>
      <div
        className={`${styles.header} ${isHeaderVisible ? styles.animateFade : ''}`} 
        ref={headerRef}
      >
        <h1 className={styles.aboutHeader}>ABOUT ME</h1>
        <h1 className={styles.nameTitle}>Who Is Leo Morgan?</h1>
        <p className={styles.subtitle}>Just a human obsessed with human potential.</p>
      </div>

      <div className={styles.content}>
        <div
          className={`${styles.imageWrapper} ${isImageVisible ? styles.animateFade : ''}`}
          ref={imageRef}
        >
          <Image src="/leosprint.png" alt="Leo Morgan" layout="responsive" width={200} height={200} />
          <div className={styles.socialLinks}>
            <a 
              href="https://www.instagram.com/leo_morgan/" 
              target="_blank" 
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
            <a
              href="https://www.youtube.com/@leomorgan_12"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>
            <a 
              href="https://ie.linkedin.com/in/leo-morgan-b51b43138" 
              target="_blank" 
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
          </div>
        </div>

        <div
          className={`${styles.textWrapper} ${isTextVisible ? styles.animateFade : ''}`}
          ref={textRef}
        >
          <h2 className="font-bold">Hey, I&apos;m Leo.</h2>
          <p>
            I&apos;m an athlete, software engineer and content creator passionate about the mind, technology, and personal development.
          </p>
          <p>
            I currently work as a Software Engineer in the financial services industry, and experienced as a freelance videographer on the side. 
          </p>
          <p>
            I share my experiences and learnings through writing and creating compelling visual content. 
          </p>
        </div>
      </div>
    </section>
  );
}