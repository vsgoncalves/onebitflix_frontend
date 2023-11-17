import Head from "next/head";
import FeaturedSection from "@/src/components/homeAuth/featuredSection";
import NewestCategory from "@/src/components/homeAuth/newestCategory";
import FavoritesCategory from "@/src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "@/src/components/homeAuth/featuredCategory";
import ListCategories from "@/src/components/homeAuth/listCategories/indext";


const HomeAuth = function () {
    return (
        <>
            <Head>
                <title> Carbografite - Home </title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
	            <FeaturedSection />
                <NewestCategory />
                <FavoritesCategory />
                <FeaturedCategory />
                <ListCategories />
                
            </main>
      </>
    );
  };
  
  export default HomeAuth;



 