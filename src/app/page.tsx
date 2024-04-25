import Image from "next/image";
import styles from "./page.module.css";
import Isabella from "./assets/_MG_1591.png";
import Header from "@/components/global/Header";

export default function Home() {
  return (
    <main classnameName={styles.main}>
      <Header />
      <div classnameName={styles.description}>
        <h1 classnameName={styles.h1}>Welcome,</h1>
        <p classnameName={styles.p}>
          My name is Isabella Pelot, I am a graphic design student at North Idaho College in my first year. I am interested in all aspects of design and look forward to learning more in the future.
        </p>
      </div>
      <div classnameName={styles.frontImage}>
        <Image 
          src={Isabella} 
          alt="Isabella"
          fill
        />
      <footer classnameName={styles.footer}>
        <small>Copyright© Isabella Pelot 2024</small>
      </footer>
      </div>
    </main>
  );
}
