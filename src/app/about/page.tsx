import Image from "next/image";
import styles from "./page.module.css";
import Isabella from "./assets/image_me.png";
import Logo from "./assets/i_p_logo_white 2.png";

export default function About() {
  return (
    <body className={styles.body}>
      <div className={styles.box}>
        <Image src={Logo} alt="Logo" className={styles.logo} />
        
        <div className={styles.navbar} id="navbar">
          <a href="index.html#Home">Home</a>
          <a href="/about">About Me</a>
          <a href="portfolio_projects.html#Projects">Projects</a>
          <a href="portfolio_contact.html#ContactMe">Contact</a>
          <a href="portfolio_blog.html#Blog">Blog</a>
          <a href="javascript:void(0);" className={styles.hamburger}>
            <i className="fa fa-bars"></i>
          </a>
        </div>

        <h1>About Me</h1>

        <p>
            Hi there! My name is Isabella Pelot, and I&#39;m passionate about graphic design. My journey into the world of graphic design started when I first learned about it at the age 11.
        </p>

        <p>
            In 2021, I made a significant move from Atlanta, Georgia, to North Idaho. This transition marked my entrance into public school after being homeschooled for most of my life. It was during this time that I discovered North Idaho College&#39;s graphic design program, thanks to the guidance of my counselor.
        </p>

        <p>
            Currently, I&#39;m enrolled in North Idaho College&#39;s graphic design program, where I&#39;m eager to expand my knowledge and skills in the field. To me, design is more than just a profession—it&#39;s a creative journey that I&#39;m excited to explore further.
        </p>

        <div className={styles.roundedBox}>
            <Image src={Isabella} alt="Photograph of me." className={styles.me} />
        </div>

        <footer className={styles.footer}><small>Copyright© Isabella Pelot 2024</small></footer>
      </div>
    </body>
  );
}


