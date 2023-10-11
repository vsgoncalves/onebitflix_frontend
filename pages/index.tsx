import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "../src/services/courseService";
import SlideSection from "../src/components/homeNoAuth/slideSection";
import { ReactNode, useEffect } from "react";
import Footer from "@/src/components/common/footer";
import AOS from "aos";
import "aos/dist/aos.css";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}


const HomeNoAuth = ({ course }: IndexPageProps) => {

 
  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
		<>
			<Head>
        <title>Carbografite | Treinamento</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Carbografite | Treinamento" key="title" />
        <meta name="description" content="Tenha acesso aos treinamentos de Trabalho em altura, Solda e Ferramentas"/>
      </Head>
			<main>
	<div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
		<HeaderNoAuth />
		<PresentationSection />
	</div>
	<div data-aos="fade-right" data-aos-duration="1200">
		<CardsSection />
	</div>
	<div data-aos="fade-up" data-aos-duration="1350">
		<SlideSection newestCourses={course} />
	</div>
	<Footer />
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