import styles from "./Landing.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentLeft}>
        <h1 className={styles.title}>Leo Morgan</h1>
        <h2 className={styles.subtitle}>Train. Learn. Create.</h2>
        <p className={styles.subText}>
          I&apos;m passionate about helping others unlock their potential, whether
          it&apos;s athletic performance, creativity, or personal growth. I share
          solutions and strategies I&apos;ve personally used to overcome challenges in these
          areas. If you&apos;re looking to move closer to your goals through practical
          insights sent straight to your inbox, sign up here, or not, up to you really →
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
