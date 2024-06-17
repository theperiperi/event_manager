import Image from 'next/image';
import Link from 'next/link';


export const HomePage = ({data}) => (
    <main>
    {data?.map((ev) => (
      <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
      <a href={`/events/${ev.id}`}>
        <Image width={300} height={300} alt={ev.title} src={ev.image} />
        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
      </a>
      </Link>
    ))}
  </main>
);

