import Image from "next/image";
import styles from "./page.module.css";
import Isabella from "./assets/_MG_1591.png";
import Logo from "./assets/i_p_logo_white.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.logoContainer}>
          <Image 
            src={Logo} 
            alt="Logo" 
            width={80} 
            height={80} 
          />
        </div>

        <div className={styles.navbar} id="navbar">
          <a href="/page">Home</a>
          <a href="/about">About Me</a>
          <a href="portfolio_projects.html#Projects">Projects</a>
          <a href="portfolio_contact.html#ContactMe">Contact</a>
          <a href="portfolio_blog.html#Blog">Blog</a>
          <a href="javascript:void(0);" className={styles.hamburger}>
            <i className="fa fa-bars"></i>
          </a>
        </div>

        <h1 className={styles.h1}>Welcome,</h1>

        <p className={styles.p}>My name is Isabella Pelot, I am a graphic design student at North Idaho College in my first year. I am interested in all aspects of design and look forward to learning more in the future.</p>

        <div className={styles.roundedBox}>
          <Image 
            src={Isabella} 
            alt="Isabella" 
            width={500} 
            height={500} 
          />
        </div>

        <h4>Look around this site to:</h4>

        <ul>
          <li>Find out more about me.</li>
          <li>See my work.</li>
          <li>Get in contact with me.</li>
        </ul>

        <div className={styles.interests}>
          <h2 className={styles.h2}>My Interests</h2>
          <ul className={styles.ul}>
            <li>Graphic Design</li>
            <li>Photography</li>
            <li>Web Development</li>
            <li>Illustration</li>
          </ul>
        </div>

        <footer className={styles.footer}><small>Copyright© Isabella Pelot 2024</small></footer>
      </div>
    </main>
  );
}
