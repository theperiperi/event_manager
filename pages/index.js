import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {HomePage} from "../src/components/home/home-page";

export default function Home ({ data }){
  return (
    <div>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Events App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data}/>

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
