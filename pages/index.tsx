import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { Services } from "../src/components/Services";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fótum Engenharia</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
