import Link from 'next/link';
import Image from 'next/image';
export const EventsPge =({data})=>{
    return(
    <div>
      <h1>Event Page</h1>
      <div>
        {data.map(ev => (
          <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
          <a href={`/events/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
          </Link>
        ))}
      </div>
    </div>
    )
}