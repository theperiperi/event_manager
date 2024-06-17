import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Event Page</h1>
      <div>
        {data.map(ev => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a href={`/events/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
          </Link>
        ))}
      </div>
    </div>
  );
};



export default EventsPage;

export async function getStaticProps() {
  const data = await import('/data/data.json');
  const event_categories = data.events_categories || [];
  return {
    props: {
      data: event_categories.length > 0 ? event_categories : [],
    },
  };
}



