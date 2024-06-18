import CatEvent from '@/src/components/events/catEvent';

const EventsCategoryPage =({data,pageName}) =>{
  return <CatEvent data={data} pageName={pageName} />
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

