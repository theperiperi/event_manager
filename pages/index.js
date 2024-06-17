import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
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
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((ev) => (
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        ))}
      </main>

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
