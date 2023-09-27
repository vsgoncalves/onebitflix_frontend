import {  Button, Container } from 'reactstrap';


import styles from './styles.module.scss';

const HeaderNoAuth = function () {
 return( 
    <>
        <div className={styles.ctaSection}>
            <img 
                src="/homeNoAuth/logoCtaBlack.png" 
                alt="logoCta" 
                className={styles.imgCta} 
            />
            <p>Se cadastre para ter acesso aos nossos treinamentos</p>
            <img 
                src="/homeNoAuth/logoCtaBlack.png" 
                alt="logoCta" 
                className={styles.imgCta} 
            />
        </div>
        <Container className={styles.nav}>
            <img src="/logoCarbografite.svg" alt="logoCarbografite" className={styles.imgLogoNav}/>
            <div>
                
					<Button className={styles.navBtn} outline href="/login">Entrar</Button>
                
					<Button className={styles.navBtn} outline href="/register">Quero fazer parte</Button>
				
            </div>
        </Container>
    </>
 );    
};

export default HeaderNoAuth;