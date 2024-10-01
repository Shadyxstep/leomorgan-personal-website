import styles from "./Landing.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentLeft}>
        <h1 className={styles.title}>Leo Morgan</h1>
        <h2 className={styles.subtitle}>Train. Learn. Create.</h2>
        <p className={styles.subText}>
          I'm passionate about performance, creativity, and personal growth. I
          write about the problems I've solved in these domains. If these topics
          interest you, you can sign up to receive free insights →
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