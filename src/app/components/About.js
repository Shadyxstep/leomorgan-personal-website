import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
  return (
    <section className={styles.aboutSection}>
    <div className={styles.header}>
      <h1 className={styles.aboutHeader}>ABOUT ME</h1>
      <h1 className={styles.nameTitle}>Who Is Leo Morgan?</h1>
      <p className={styles.subtitle}>Just a human obsessed with human performance & creativity.</p>
    </div>
  
    <div className={styles.content}>
      <div className={styles.imageWrapper}>
        <img src="/leosprint.png" alt="Leo Morgan" className={styles.profileImage} />
      </div>
  
      <div className={styles.textWrapper}>
        <h2>Hey, I'm Leo.</h2>
        <p>
          I’m an international sprinter, software engineer, athletic performance coach, and content creator passionate about the mind, technology, and personal development.
          I teach performance optimization, strategies for athletic development, building effective habits, and creative workflows to help individuals unlock their true potential.
        </p>
        <p>
          Previously, I worked as a rugby & sprints coach. Now, I share my experiences through 
          writing and digital content, focusing on actionable insights for achieving your personal, athletics and professional goals.
        </p>
      </div>
    </div>
  </section>
  );
}