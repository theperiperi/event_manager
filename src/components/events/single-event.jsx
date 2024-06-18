import Image from 'next/image';
export const SingleEvent = ({data}) => {
    return(
        <div>
            <Image src={data.image} width={700} height={300} alt={data.title}/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <input type="email" />
            <button type="submit">Submit</button>
            
        </div>
    )
}

export default SingleEvent;