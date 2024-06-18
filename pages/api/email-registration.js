export default function handler(req, res) {
    const{method}=req;
    if(method==="POST"){
        const {emailValue,eventId}=req.body;
        console.log("Email Value",emailValue);
        console.log("Event ID",eventId);
        res.status(200).json({status:"email log success"});
    }
}