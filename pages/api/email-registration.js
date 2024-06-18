import path from 'path';
import fs from 'fs';

function buildPath(){
    path.join(process.cwd,'data','data.json');
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
        const {emailValue,eventId}=req.body;
        console.log("Email Value",emailValue);
        console.log("Event ID",eventId);
        res.status(200).json({status:"email log success"});
    }
}