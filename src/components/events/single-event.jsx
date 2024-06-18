import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();

  const onSubmit =async(e)=>{
    e.preventDefault();
    const email=inputEmail.current.value;
    const eventId=router?.query.id;

    try{
      //POST fetch request to the backend
      //body email value and id
      const response=await fetch('/api/email-registration',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email,eventId})
      });
      if(!response.ok){
        throw new Error('Oopsies!Something went wrong `${response.status}`');
      }
      const data=await response.json();
      console.log('POST',data);

    }
    catch(error){
      console.log('ERROR',e);
    }
  };
  return (
    <div className='single-event-container'>
    <Image src={data.image} width={600} height={400} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <form onSubmit={onSubmit} className='registration-form '>
        <label htmlFor='email'>Register for this event</label>
        <input ref={inputEmail} type='email' id='email' placeholder='Enter your email' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
