import Image from 'next/image';

const SingleEvent = ({ data }) => {
  return (
    <div className="single-event-container">
    <Image src={data.image} width={600} height={400} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <form>
        <label htmlFor="email">Register for this event</label>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
