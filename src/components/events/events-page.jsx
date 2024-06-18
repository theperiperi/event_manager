import Link from 'next/link';
import Image from 'next/image';

export const AllEvents = ({ data }) => {
  return (
    <div className="all-events-container">
      <h1>Event Page</h1>
      <div>
        {data.map(ev => (
          <div key={ev.id} className="event-card">
            <Link legacyBehavior href={`/events/${ev.id}`} passHref>
              <a>
                <Image
                  src={ev.image}
                  alt={ev.title}
                  width={300}
                  height={300}
                  className="event-image"
                />
                <div className="event-text">{ev.title}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
