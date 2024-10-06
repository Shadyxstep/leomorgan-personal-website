import styles from './Footer.module.css'; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FooterSection() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Image src="/home-icon.png" alt="home" height={50} width={50}/>
        </div>
        <h2 className={styles.tagline}>Train. Learn. Create.</h2>
        <p className={styles.description}>
          Software engineer, international sprinter, videographer. Sharing insights on performance optimization, athletic development, building effective habits, and creative workflows.
        </p>
        <div className={styles.socialLinks}>
        <a href="https://instagram.com" target="_blank" className={styles.icon}>
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
        <a href="https://x.com" target="_blank" className={styles.icon}>
          <FontAwesomeIcon icon={faXTwitter} size="1x" />
        </a>
        <a href="https://linkedin.com" target="_blank" className={styles.icon}>
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
      </div>
      </div>

      <div className={styles.rightSection}>
        <h2 className={styles.taglineRight}>Motivation, Productivity, Creativity</h2>
        <p className={styles.descriptionRight}>
        Practical insights sent straight to your inbox ↓
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
    </footer>
  );
}