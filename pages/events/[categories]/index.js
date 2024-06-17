import Image from 'next/image';
import Link from 'next/link';

const EventsCategoryPage =({data,pageName}) =>{
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

export default EventsCategoryPage;

//only for dynamic routes
//to know how many pages to create
export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map((ev) => {
      return {
        params: {
          categories: ev.id.toString(),
        },
      };
    });
    return {
      paths: allPaths,
      fallback: false,
    };
  }
  

  //to get the data for the page
  //static pages also need this
  export async function getStaticProps(context) {
    console.log(context);
    const id = context?.params.categories;
    const { allEvents } = await import('/data/data.json');
  
    const data = allEvents.filter((ev) => ev.city === id);
  
    return { props: { data, pageName: id } };
  }

