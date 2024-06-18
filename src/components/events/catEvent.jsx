import Image from "next/image"
import Link from "next/link"

export const CatEvent =({data,pageName})=>{
    return(
        <div>
            <h1>Events in {pageName}</h1>
            {data.map((ev)=>(
              <Link legacyBehavior key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                <a >
                    <Image src={ev.image} alt={ev.title} width={300} height={300} />
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                </a>
              </Link>
            ))}
        </div>
    )
}

export default CatEvent;