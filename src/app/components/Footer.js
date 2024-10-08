import styles from "./Footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterSection() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Image src="/home-icon.png" alt="home" height={50} width={50} />
        </div>
        <h2 className={styles.tagline}>Train. Learn. Create.</h2>
        <p className={styles.description}>
          Software engineer, athlete, creator. Sharing
          insights on performance, athletic development, productivity, mindset and creativity.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/leo_morgan/"
            target="_blank"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://x.com/_leomorgan"
            target="_blank"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a
            href="https://ie.linkedin.com/in/leo-morgan-b51b43138"
            target="_blank"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>

      <div className={styles.rightSection}>
        <h2 className={styles.taglineRight}>
          Productivity, Mindset, Creativity
        </h2>
        <p className={styles.descriptionRight}>
          Practical insights sent straight to your inbox
        </p>
        <p>↓</p>
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
      <div className={styles.footerBottom}>
        <p className={styles.disclaimer}>
          All rights reserved <br></br>© 2024 Leo Morgan
        </p>
      </div>
    </footer>
  );
}
