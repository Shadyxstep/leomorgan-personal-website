import Link from "next/link";
import styles from './Letters.module.css';
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";

const newsletters = [
  {
    title: "I read Charlie Francis' book the Speed Trap, so you don't have to.",
    slug: "speed-trap",
    date: "October 21, 2024",
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
    <Navbar />
    <section className={styles.lettersPage}>
      <div className={styles.header}>
        <h1>Explore Your Curiosity</h1>
        <p>Deep dives on performance, the art of speed, creativity, and personal growth.</p>
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
    <FooterSection />
    </>
  );
}