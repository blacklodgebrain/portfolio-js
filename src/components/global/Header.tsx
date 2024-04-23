"use client";

import Image from "next/image";
import Logo from "../../app/assets/i_p_logo_white.png";
import styles from "../../app/page.module.css";
import { Box, styled } from "@mui/material";

const Header = () => {
    return (
        <Navbar>
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
            <a href="/ContactForm">Contact</a>
            <a href="portfolio_blog.html#Blog">Blog</a>
            <a href="#" className={styles.hamburger}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </Navbar>

    );
}

export default Header;


const Navbar = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
`