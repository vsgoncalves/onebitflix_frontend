import { Container } from 'reactstrap';
import styles from "./styles.module.scss";

                         

const CardsSection = function () {
    return(
        <>
        <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
        <Container className={"d-flex flex-wrap justify-content-center gap-4 pb-5"}>
            <div className={styles.card1}>
                <p className={styles.cardTitle}>TRABALHO EM ALTURA</p>
                <p className={styles.cardDescription}>A importância de executar um trabalho de forma correta e segura.</p>
            </div>
            <div className={styles.card2}>
                <p className={styles.cardTitle}>TRABALHO EM ALTURA</p>
                <p className={styles.cardDescription}>A importância de executar um trabalho de forma correta e segura.</p>
            </div>
            <div className={styles.card3}>
                <p className={styles.cardTitle}>TRABALHO EM ALTURA</p>
                <p className={styles.cardDescription}>A importância de executar um trabalho de forma correta e segura.</p>
            </div>
            <div className={styles.card4}>
                <p className={styles.cardTitle}>TRABALHO EM ALTURA</p>
                <p className={styles.cardDescription}>A importância de executar um trabalho de forma correta e segura.</p>
            </div>
            <div className={styles.card5}>
                <p className={styles.cardTitle}>TRABALHO EM ALTURA</p>
                <p className={styles.cardDescription}>A importância de executar um trabalho de forma correta e segura.</p>
            </div>
            <div className={styles.card6}>
                <p className={styles.cardTitle}>TRABALHO EM ALTURA</p>
                <p className={styles.cardDescription}>A importância de executar um trabalho de forma correta e segura.</p>
            </div>
        </Container>
        </>
    );
};

export default CardsSection;