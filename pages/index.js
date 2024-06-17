import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {HomePage} from "../src/components/home/home-page";


export default function Home ({ data }){
  return (
    <div className={styles.container}>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Events App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img src=""  />
          <Link legacyBehavior href="/">
          <a href="/">Home</a>
          </Link>
          <Link legacyBehavior href="/events">
          <a href="/events">Events</a>
          </Link>
          <Link legacyBehavior href="/about">
          <a href="/about">About</a>
          </Link>
        </nav>
      </header>
      
      <HomePage data={data}/>

      <footer className={styles.footer}>
        <p>&copy; 2024 Events App</p>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  
  const data = await import('/data/data.json');
  const event_categories = data.events_categories || [];

  return {
    props: {
      data: event_categories.length > 0 ? event_categories : [],
    },
  };
  
}
