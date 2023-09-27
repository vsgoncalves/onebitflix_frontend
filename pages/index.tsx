import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";



const HomeNotAuth = () => {
  return (
		<>
			<Head>
        <title>Carbografite | Treinamento</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Carbografite | Treinamento" key="title" />
        <meta name="description" content="Tenha acesso aos treinamentos de Trabalho em altura, Solda e Ferramentas"/>
      </Head>
			<main>
      <div className={styles.sectionBackground}>
          <HeaderNoAuth/>
          <PresentationSection/>
        </div>
      </main>
		</>
  );
};

export default HomeNotAuth;