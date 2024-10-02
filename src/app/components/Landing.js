import styles from "./Landing.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentLeft}>
        <h1 className={styles.title}>Leo Morgan</h1>
        <h2 className={styles.subtitle}>Train. Learn. Create.</h2>
        <p className={styles.subText}>
          I’m passionate about helping others unlock their potential, whether
          it's athletic performance, creativity, or personal growth. I share
          solutions and strategies I’ve used to overcome challenges in these
          areas. If you’re looking to level up, join me and get practical
          insights sent straight to your inbox →
        </p>
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
      <div className={styles.contentRight}>
        <img src="/heroimg.png" alt="Leo Morgan" className={styles.heroImage} />
      </div>
    </section>
  );
}
