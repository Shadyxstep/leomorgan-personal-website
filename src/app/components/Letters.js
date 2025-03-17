"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from './Letters.module.css';

const newsletters = [
  {
    title: "Charlie Francis' book the Speed Trap",
    slug: "speed-trap",
    date: "20th October 2024",
    author: "Leo Morgan",
  },
  {
    title: "Coming Soon",
    slug: "coming-soon-two",
    date: "No Date",
    author: "Leo Morgan",
  },
  {
    title: "Coming Soon",
    slug: "coming-soon-three",
    date: "No Date",
    author: "Leo Morgan",
  },
  {
    title: "Coming Soon",
    slug: "coming-soon-four",
    date: "No Date",
    author: "Leo Morgan",
  },
];

export default function LettersPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); 
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.lettersPage} ${isVisible ? styles.fadeIn : ""}`}
    >
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Explore Your Curiosity</h1>
        <p>Deep diving into human potential, creativity, and personal growth.</p>
      </div>
      <div className={styles.lettersList}>
        {newsletters.map((newsletter) => (
          <div key={newsletter.slug} className={styles.letterCard}>
            <h2>{newsletter.title}</h2>
            <p className={styles.metaData}>
              {newsletter.author} • {newsletter.date}
            </p>
            <Link href={`/letters/${newsletter.slug}`} className={styles.readMore}>
              Read Full Post
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}