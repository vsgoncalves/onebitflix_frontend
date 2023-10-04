import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "../src/services/courseService";
import SlideSection from "../src/components/homeNoAuth/slideSection";
import { ReactNode } from "react";


interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}


const HomeNoAuth = ({ course }: IndexPageProps) => {
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
      <CardsSection/>
      <SlideSection newestCourses={course} />
      </main>
		</>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;