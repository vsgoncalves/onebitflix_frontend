import Head from "next/head";
import style from "../style/homeNotAuth.module.scss";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";


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
        <HeaderNoAuth/>
      </main>
		</>
  );
};

export default HomeNotAuth;