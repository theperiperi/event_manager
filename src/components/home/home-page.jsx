import Image from 'next/image';
import Link from 'next/link';

export const HomePage = ({ data }) => (
  <div className="cards-container">
    {data?.map((ev, index) => (
      <div className={`card ${index % 2 === 0 ? 'even' : 'odd'}`} key={ev.id}>
        <Link legacyBehavior href={`/events/${ev.id}`} passHref>
          <a>
            <div className="card-content">
              <Image width={300} height={300} alt={ev.title} src={ev.image} />
              <div className="text-content">
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default HomePage;
