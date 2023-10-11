import { Container } from "reactstrap";
import styles from "./styles.module.scss"

const Footer = function () {
    return(
    <>
    <Container className={styles.footer}>
	  <img 
        src="/logoCarbografite.svg"
        alt="logoFooter"
        className={styles.footerLogo}
      />
      <a 
        href="https://www.carbografite.com.br"
        target={"blank"} 
        className={styles.footerLink}>CARBOGRAFITE.COM.BR
      </a>
    </Container>
    </>
  );
};

export default Footer;