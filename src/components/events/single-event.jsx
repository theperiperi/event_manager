export const SingleEvent =() =>{
    return(
        <div>
            <Image src={data.image} width={700} height={300} alt={data.title}/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}