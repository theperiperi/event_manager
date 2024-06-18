import { EventsPge } from '../../src/components/events/events-page';

const EventsPage = ({ data }) => {
  return <EventsPge data={data} /> ;
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



