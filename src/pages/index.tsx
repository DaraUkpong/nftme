import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/containers/hero/hero";
import Artwork from "@/containers/artwork/artwork";
import Trending from "@/containers/trending/trending";
import Popular from "@/containers/popular/popular";
import Join from "@/containers/join/join";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <Artwork />

        <Trending />
        <Join />
        <Footer />
      </main>
    </>
  );
}
