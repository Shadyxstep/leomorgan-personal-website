import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
  return (
    <section className={styles.aboutSection}>
    <div className={styles.header}>
      <h1 className={styles.aboutHeader}>ABOUT ME</h1>
      <h1 className={styles.nameTitle}>Who Is Leo Morgan?</h1>
      <p className={styles.subtitle}>Just a human obsessed with human potential.</p>
    </div>
  
    <div className={styles.content}>
      <div className={styles.imageWrapper}>
        <img src="/leosprint.png" alt="Leo Morgan" className={styles.profileImage} />
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
  
      <div className={styles.textWrapper}>
        <h2 className="font-bold">Hey, I'm Leo.</h2>
        <p>
          I’m an international sprinter, software engineer, athletic performance coach, and content creator passionate about the mind, technology, and personal development.
          I teach about performance optimization, athletic development, building effective habits, and creative workflows to help people move towards goals that matter to them. All of which are poroblems I've navigated and solved in my own life.
        </p>
        <p>
          I currently work as a Software Engineer in the financial services industry. Previously, I worked as a rugby & sprints coach as well as a freelance videographer. Now, I share my experiences and learnings through 
          writing and digital content, focusing on actionable insights that can help you achieve your personal, athletic and professional goals.
        </p>
      </div>
    </div>
  </section>
  );
}