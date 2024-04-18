import Image from "next/image";
import styles from "../page.module.css";
import Logo from "./assets/i_p_logo_white.png";
import Header from "@/components/global/Header";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <Header />

        <ContactForm />

        <footer className={styles.footer}><small>Copyright© Isabella Pelot 2024</small></footer>
      </div>
    </main>
  );
}
