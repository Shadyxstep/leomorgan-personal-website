"use client";
import Link from "next/link";
import styles from './Letters.module.css';

const newsletters = [
  {
    title: "Coming Soon",
    slug: "coming-soon",
    date: "No Date",
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
  return (
    <>
    <section className={styles.lettersPage}>
      <div className={styles.header}>
        <h1>Explore Your Curiosity</h1>
        <p>Deep dives on human potential, creativity, and personal growth.</p>
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
    </>
  );
}