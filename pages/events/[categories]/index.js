const EventsCategoryPage =() =>{
    return(
        <div>
            <h1>Events in London</h1>
            
            <a href="/events/london/ev1"><img /><h2>Event 1</h2></a>
            <a href="/events/london/ev2"><img /><h2>Event 2</h2></a>
            <a href="/events/london/ev3"><img /><h2>Event 3</h2></a>
            <a href="/events/london/ev4"><img /><h2>Event 4</h2></a>
            <a href="/events/london/ev5"><img /><h2>Event 5</h2></a>
            <a href="/events/london/ev6"><img /><h2>Event 6</h2></a>
            <a href="/events/london/ev7"><img /><h2>Event 7</h2></a>
            <a href="/events/london/ev8"><img /><h2>Event 8</h2></a>
            
        </div>
    )
}

export default EventsCategoryPage;

export async function getStaticPath(){
    const {event_categories} = await import('/data/data.json');
    const allPaths=event_categories.map(ev=>{
        return{
            params:{
                cat:ev.id.toString(),
            },
        };
    });
    return{
        paths:allPaths,
        fallback:false,
    }
}