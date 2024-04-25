import Image from "next/image";
import styles from "./contact.module.css";
import Logo from "./assets/i_p_logo_white.png";
import Header from "@/components/global/Header";
import ContactForm from "./components/ContactForm";
import { Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Container maxWidth={"xl"}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={12} md={4}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </div>
      <footer className={styles.footer}><small>Copyright© Isabella Pelot 2024</small></footer>
    </main>
  );
}
