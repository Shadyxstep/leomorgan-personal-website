"use client";

import styles from "./Landing.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  /* Email Signup Functions */
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
          I&apos;m passionate about performance, technology, creativity, and personal growth. I share
          solutions and strategies I&apos;ve personally used to overcome challenges in these
          areas. If any of these topics interest you, I write about practical insights to problems I&apos;ve solved in these domains. Best of all, they&apos;re sent straight to your inbox, free of charge. 
          <br></br> Sign up here ↓
        </p>
        <div className={styles.formWrapper}>
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
        }`} // Apply fade-in class dynamically
        ref={rightSectionRef}
      >
        <div className={styles.imageWrapper}>
          <Image 
            src={"/heroimg.png"} 
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
