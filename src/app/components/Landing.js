"use client";

import styles from "./Landing.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  /* Email Signup Functions */
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailchimpUrl =
      "https://app.us11.list-manage.com/subscribe/post?u=73ac78b880c1bc85a83399f20&id=6557e0f816";

    const formData = new FormData();
    formData.append("EMAIL", email);

    try {
      const res = await fetch(mailchimpUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setMessage("Success! You're all signed up :)");
      setEmail("");
      console.log(res);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.log(error);
    }
  };

  /* CSS Animation Functions */
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setIsTypingComplete(true);
          }, 1300); 
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
        <h1 className={`${styles.title} ${isTypingComplete ? styles.typingComplete : ''}`}>
          Leo Morgan
        </h1>
        <h2 className={`${styles.subtitle} ${styles.fadeIn}`}>
          Train. Learn. Create.
        </h2>
        <p className={`${styles.subText} ${ styles.fadeIn}`}>
          I code, sprint and make videos.
          <br></br>
          I write about performance optimization, athletic development, building effective habits, and curating efficient creative workflows.
         
        </p>
        <p className={styles.signupText}>
            Sign up here ↓
          </p>  
        <div className={`${styles.formWrapper} ${styles.fadeIn}`}>
          <form className={styles.newsletterForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.ctaButton}>
              Read For Free
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
      <div
        className={`${styles.contentRight} ${
          isVisible ? styles.fadeIn : ""
        }`}
        ref={rightSectionRef}
      >
        <div className={styles.imageWrapper}>
          <Image 
            src={"/A7403927.jpg"} 
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
