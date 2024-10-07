"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
        className={`${styles.header} ${isHeaderVisible ? styles.animateHeader : ''}`} 
        ref={headerRef}
      >
        <h1 className={styles.aboutHeader}>ABOUT ME</h1>
        <h1 className={styles.nameTitle}>Who Is Leo Morgan?</h1>
        <p className={styles.subtitle}>Just a human obsessed with human potential.</p>
      </div>

      <div className={styles.content}>
        <div
          className={`${styles.imageWrapper} ${isImageVisible ? styles.animateImage : ''}`}
          ref={imageRef}
        >
          <Image src="/leosprint.png" alt="Leo Morgan" layout="responsive" width={200} height={200} />
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/leo_morgan/" target="_blank" className={styles.icon}>
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
            <a href="https://x.com/_leomorgan" target="_blank" className={styles.icon}>
              <FontAwesomeIcon icon={faXTwitter} size="1x" />
            </a>
            <a href="https://ie.linkedin.com/in/leo-morgan-b51b43138" target="_blank" className={styles.icon}>
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
          </div>
        </div>

        <div
          className={`${styles.textWrapper} ${isTextVisible ? styles.animateText : ''}`}
          ref={textRef}
        >
          <h2 className="font-bold">Hey, I&apos;m Leo.</h2>
          <p>
            I&apos;m an international sprinter, software engineer, athletic performance coach, and content creator passionate about the mind, technology, and personal development.
            I write about performance optimization, athletic development, building effective habits, and curating efficient creative workflows.
          </p>
          <p>
            I currently work as a Software Engineer in the financial services industry. Previously, I worked as a rugby & sprints coach as well as a freelance videographer. I share my experiences and learnings through 
            writing and creating compelling visual content. 
          </p>
        </div>
      </div>
    </section>
  );
}