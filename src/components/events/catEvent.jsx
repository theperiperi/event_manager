import Image from "next/image";
import Link from "next/link";

export const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat-event-container">
      <h1>Events in {pageName}</h1>
      {data.map((ev) => (
        <div key={ev.id} className="event-card">
          <Link legacyBehavior href={`/events/${ev.city}/${ev.id}`} passHref>
            <a>
              <div className="event-image-container">
                <Image
                  src={ev.image}
                  alt={ev.title}
                  width={300}
                  height={300}
                  className="event-image"
                />
              </div>
              <div className="event-details">
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CatEvent;
