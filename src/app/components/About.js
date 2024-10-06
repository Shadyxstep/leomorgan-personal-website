import styles from './About.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
  return (
    <section id="about" className={styles.aboutSection}>
    <div className={styles.header}>
      <h1 className={styles.aboutHeader}>ABOUT ME</h1>
      <h1 className={styles.nameTitle}>Who Is Leo Morgan?</h1>
      <p className={styles.subtitle}>Just a human obsessed with human potential.</p>
    </div>
  
    <div className={styles.content}>
      <div className={styles.imageWrapper}>
        <Image src="/leosprint.png" alt="Leo Morgan"  layout="responsive"
        width={200} // This is only for the aspect ratio
        height={200} />
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
        <h2 className="font-bold">Hey, I&apos;m Leo.</h2>
        <p>
          I&apos;m an international sprinter, software engineer, athletic performance coach, and content creator passionate about the mind, technology, and personal development.
          I teach about performance optimization, athletic development, building effective habits, and creative workflows to help people move towards goals that matter to them. All of which are problems I&apos;ve navigated and solved in my own life.
        </p>
        <p>
          I currently work as a Software Engineer in the financial services industry. Previously, I worked as a rugby & sprints coach as well as a freelance videographer. I share my experiences and learnings through 
          writing and creating digital content, focusing on actionable insights that can help you achieve your personal, athletic and professional goals.
        </p>
      </div>
    </div>
  </section>
  );
}