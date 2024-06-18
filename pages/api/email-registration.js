import path from 'path';
import fs from 'fs';

function buildPath(){
    return path.join(process.cwd(),'data','data.json');
}

function extractData(filePath){
    const jsonData=fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    //now converted to a javadscript object
    return data;

}

export default function handler(req, res) {
    const{method}=req;

    //Access our data

    //extract email value and event id from the body
        //404 if there are no AllEvents
        //Allevents- loop and identify event id
            //add email into emails_registered(write)
            //only if email is not already registered

    const filePath=buildPath();
    const {events_categories,allEvents}=extractData(filePath);

    if(!allEvents){
        res.status(404).json({message:"No events found"});
    }
 

    if(method==="POST"){
        const {email,eventId}=req.body;

        const newAllEvents=allEvents.map(ev =>{
            if(ev.id===eventId){
                if(ev.emails_registered.includes(email)){
                    res.status(400).json({message:"Email already registered"});
                }
                return{
                    ...ev,
                    emails_registered:[...ev.emails_registered,email]
                
                }
            }
            return ev;
        });

        fs.writeFileSync(filePath,JSON.stringify({events_categories,allEvents:newAllEvents}));

        console.log("Email Value",email);
        console.log("Event ID",eventId);
        res.status(200).json({status:"email log success"});
    }
}