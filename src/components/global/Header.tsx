import Image from "next/image";
import Logo from "../../app/assets/i_p_logo_white.png";
import styles from "../../app/page.module.css";

const Header = () => {
    return (
        <>
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
          <a href="/contact">Contact</a>
          <a href="portfolio_blog.html#Blog">Blog</a>
          <a href="#" className={styles.hamburger}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
        </>
    );
}

export default Header;