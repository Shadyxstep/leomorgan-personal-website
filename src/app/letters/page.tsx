import Link from "next/link";
import styles from './Letters.module.css';
import Navbar from "../components/Navbar";

const newsletters = [
  {
    title: "Coming Soon",
    slug: "coming-soon",
    date: "October 5, 2024",
    author: "Leo Morgan",
  },
  {
    title: "Coming Soon",
    slug: "coming-soon-two",
    date: "September 28, 2024",
    author: "Leo Morgan",
  },
  {
    title: "Coming Soon",
    slug: "coming-soon-three",
    date: "September 21, 2024",
    author: "Leo Morgan",
  },
  {
    title: "Coming Soon",
    slug: "coming-soon-four",
    date: "September 14, 2024",
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