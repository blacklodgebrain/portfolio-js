import Image from "next/image";
import styles from "./page.module.css";
import Isabella from "./assets/image_me.png";
import Header from "@/components/global/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <h1 className={styles.h1}>About Me</h1>
        <p className={styles.p}>
          Hi there! My name is Isabella Pelot, and I&#39;m passionate about graphic design. My journey into the world of graphic design started when I first learned about it at the age 11.
          In 2021, I made a significant move from Atlanta, Georgia, to North Idaho. This transition marked my entrance into public school after being homeschooled for most of my life. It was during this time that I discovered North Idaho College&#39;s graphic design program, thanks to the guidance of my counselor.
          Currently, I&#39;m enrolled in North Idaho College&#39;s graphic design program, where I&#39;m eager to expand my knowledge and skills in the field. To me, design is more than just a profession—it&#39;s a creative journey that I&#39;m excited to explore further.
        </p>
      </div>
      <div className={styles.frontImage}>
        <Image 
          src={Isabella} 
          alt="Isabella"
          fill
        />
      <footer className={styles.footer}>
        <small>Copyright© Isabella Pelot 2024</small>
      </footer>
      </div>
    </main>
  );
}


