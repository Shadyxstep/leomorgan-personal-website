"use client";
import styles from "./Products.module.css";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";

export default function ProductSection() {

 return (
    <>
    <Navbar />
    <section className={styles.productSection}>
     <h1 className={styles.title}>Coming soon...  &#x1F440;</h1>
    </section>
    <FooterSection />
    </>
  );
}
