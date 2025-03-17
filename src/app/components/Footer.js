
'use client'
import styles from "./Footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailchimpUrl =
      "https://app.us11.list-manage.com/subscribe/post?u=73ac78b880c1bc85a83399f20&id=6557e0f816";

    const formData = new FormData();
    formData.append("EMAIL", email);

    try {
      const res = await fetch(mailchimpUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setMessage("Success! You're all signed up :)");
      console.log(res);
      setEmail("");
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.log(error);
    }
  };

    return (
      <footer className={styles.footerSection}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <Image src="/home-icon.png" alt="home" height={50} width={50} />
          </div>
          <h2 className={styles.tagline}>Train. Learn. Create.</h2>
          <p className={styles.description}>
            Catch me below on my socials ↓
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://ie.linkedin.com/in/leo-morgan-b51b43138"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/leo_morgan/"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://ie.linkedin.com/in/leo-morgan-b51b43138"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
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
          <form className={styles.newsletterForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.ctaButton}>
              Read For Free
            </button>
          </form>
          <div className="responseText">
          {message && <p>{message}</p>}
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.disclaimer}>
            All rights reserved <br></br>© 2024 Leo Morgan
          </p>
        </div>
      </footer>
    );
};
